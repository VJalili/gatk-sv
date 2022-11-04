"""
Converts the DAT output of Tandem Repeat Finder (Benson, G. (1999)) to BED.
"""

import argparse
import gzip
import re
import tqdm

from collections import namedtuple
from collections import defaultdict


# Represents a single row of TRF output
DatRecord = namedtuple('DatRecord', [
    'chrom', 'start_0based', 'end_1based',
    'repeat_unit', 'repeat_count', 'repeat_unit_length',
    'percent_matches', 'percent_indels', 'alignment_score', 'entropy',
    'full_repeat_sequence', 'full_repeat_sequence_length',
    'left_flank', 'right_flank'])


def parse_dat_record(line, chromosome):
    """
    Parse a data line from Tandem Repeat Finder .dat output format. Similar to .fasta files, the
    chromosome name is on a separate header line, so must be passed in.
    """

    # TRF output data columns are:
    ### Indices of the repeat relative to the start of the sequence.
    ### Period size of the repeat.
    ### Number of copies aligned with the consensus pattern.
    ### Size of consensus pattern (may differ slightly from the period size).
    ### Percent of matches between adjacent copies overall.
    ### Percent of indels between adjacent copies overall.
    ### Alignment score.
    ### Percent composition for each of the four nucleotides.
    ### Entropy measure based on percent composition.

    fields = line.split()

    dat_record = {
        'chrom': chromosome,
        'start_0based': int(fields[0]) - 1,  # bed file start is 0-based, TRF output is 1-based
        'end_1based': int(fields[1]),
        'repeat_unit_length': int(fields[2]),
        'repeat_count': float(fields[3]),  # not always a whole number - because of inexact repeats and indels
        #'consensus_length': int(fields[4]),
        'percent_matches': int(fields[5]),
        'percent_indels': int(fields[6]),
        'alignment_score': int(fields[7]),
        'entropy': float(fields[12]),
        'repeat_unit': fields[13],
        'full_repeat_sequence': fields[14],
        'full_repeat_sequence_length': len(fields[14]),
        'left_flank': None,
        'right_flank': None,
    }

    if len(fields) > 16:
        dat_record['left_flank'] = fields[15]
        dat_record['right_flank'] = fields[16]

    return DatRecord(**dat_record)


def parse_dat_file(dat_file_path, dat_in_original_format=False, limit=None):
    """Parse a Tandem Repeat Finder output .dat file and yield DatRecord objects.

    Args:
        dat_file_path (str): .dat file
        dat_in_original_format (bool): set to True if the .dat file was generated without passing -ngs to Tandem Repeat Finder.
        limit (int): returns only the first N records. Useful for testing.
    Yield:
        DatRecord object for each row in the .dat file
    """
    chrom = None

    fopen = gzip.open if dat_file_path.endswith("gz") else open
    with fopen(dat_file_path, "rt") as input_dat_file:
        for i, line in enumerate(input_dat_file):
            line = line.strip()
            if not line:
                continue

            if limit is not None and i > limit:
                break

            # parse sequence header
            if line.startswith("@") or dat_in_original_format:
                if dat_in_original_format and any(line.startswith(header_line_prefix) for header_line_prefix in [
                    "Tandem", "Gary", "Program", "Boston", "Version", "Parameters"
                ]):
                    continue

                is_header_line = line.startswith("@") or line.startswith("Sequence:")
                if is_header_line:
                    if line.startswith("@"):
                        line = line[1:]
                    elif line.startswith("Sequence:"):
                        line = line[len("Sequence:"):]

                    print("\n----")
                    print(line)
                    print("----\n")
                    if " chromosome " in line:
                        match = re.search("chromosome ([chrXYMT0-9]+)[, ]", line)
                        if not match:
                            raise ValueError(f"Couldn't parse chromosome from line: {line}")
                        chrom = match.group(1)
                    else:
                        chrom = line.strip()

                    continue

            # parse data row
            yield parse_dat_record(line, chrom)


def parse_args():
    p = argparse.ArgumentParser(formatter_class=argparse.ArgumentDefaultsHelpFormatter)
    p.add_argument("--max-repeat-unit-size", help="Max repeat unit size (bp). Repeats with units > this length will be discarded",
        type=int, default=50)
    p.add_argument("--max-repeat-total-length", help="Max total repeat length from start to end (bp)",
        type=int, default=1000000000)
    p.add_argument("--dat-in-original-format", action="store_true", help="For .dat files generated without the trf -ngs flag")

    p.add_argument("dat_file_path")
    p.add_argument("output_file_path")
    args = p.parse_args()

    if ".dat" not in args.dat_file_path:
        p.error("Invalid input filename: %s" % args.dat_file_path)

    return args


def main():

    args = parse_args()
    counters = defaultdict(int)

    with (gzip.open if args.output_file_path.endswith(".gz") else open)(args.output_file_path, "wt") as output_file:
        dat_records = parse_dat_file(args.dat_file_path, dat_in_original_format=args.dat_in_original_format)
        for dat_record in tqdm.tqdm(dat_records, unit=" records"):
            counters["total records"] += 1
            print(f"{dat_record.chrom} ---|--- {len(dat_record.chrom)}")
            print(dir(dat_record.chrom))
            exit()
            if "_" in dat_record.chrom or len(dat_record.chrom) > 6:
                continue
            counters["records in chromosomes"] += 1

            if len(dat_record.repeat_unit) > args.max_repeat_unit_size:
                continue
            counters["records with repeat unit length <= %d bp" % args.max_repeat_unit_size] += 1

            if dat_record.end_1based - dat_record.start_0based > args.max_repeat_total_length:
                continue
            counters["records with total length <= %d bp" % args.max_repeat_total_length] += 1

            output_file.write("\t".join(map(str, [
                dat_record.chrom,
                dat_record.start_0based,
                dat_record.end_1based,
                dat_record.repeat_unit,
                dat_record.repeat_count,
            ])) + "\n")

    print("\n\n")
    print(counters)
    print("\n-------------\n")
    import json
    print(json.dumps(counters))
    print("\n\n")

    if counters["total records"] > 10 and counters["records in chromosomes"] == 0:
        raise ValueError("Chromosome parsing failed. Example chrom record: " + str(dat_record.chrom))

    for key, value in sorted(counters.items(), key=lambda x: x[1], reverse=True):
        print("%10d  %s" % (value, key))


if __name__ == "__main__":
    main()
