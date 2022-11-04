workflow RepeatFinderWorkflow {
    Array[File] fastas
    String output_prefix

    Int match_score = 2
    Int mismatch_score = 3
    Int indel_score = 5
    Int minscore = 8
    Int max_repeat_unit_size = 50
    Int max_repeat_total_length = 1000000000

    scatter (fasta in fastas) {
        call RepeatFinder {
            input:
                fasta=fasta,
                match_score=match_score,
                mismatch_score=mismatch_score,
                indel_score=indel_score,
                minscore=minscore,
                max_repeat_unit_size=max_repeat_unit_size

        }
    }

    call GatherDatToBed {
        input:
            input_dat_files=RepeatFinder.output_dat,
            max_repeat_unit_size=max_repeat_unit_size,
            max_repeat_total_length=max_repeat_total_length,
            output_prefix=output_prefix
    }
}

task RepeatFinder {
    File fasta

    Int match_score
    Int mismatch_score
    Int indel_score
    Int minscore
    Int max_repeat_unit_size

    Int pm = 80
    Int pi = 10

    Int disk_size = 10

    command {
        set -euxo pipefail

        FASTA_FILENAME=${fasta}
        trf ${fasta} ${match_score} ${mismatch_score} ${indel_score} ${pm} ${pi} ${minscore} ${max_repeat_unit_size} -d -h -l 6 -ngs > output.dat
    }

    output {
        File output_dat="output.dat"
    }

    runtime {
        docker: "vjalili/trf:01"
        memory: "8G"
        cpu: 1
        disks: "local-disk ${disk_size} SSD"
    }
}

task GatherDatToBed {
    Array[File] input_dat_files
    Int max_repeat_unit_size
    Int max_repeat_total_length

    String output_prefix

    Int disk_size = 20

    command {
        set -euxo pipefail

        cat ${sep=" " input_dat_files} > ${output_prefix}.dat
        python /opt/trf/dat_to_bed.py --max-repeat-unit-size ${max_repeat_unit_size} --max-repeat-total-length ${max_repeat_total_length} ${output_prefix}.dat ${output_prefix}.bed
        bedtools sort -i ${output_prefix}.bed > ${output_prefix}.sorted.bed
        igvtools index ${output_prefix}.sorted.bed
    }

    output {
        File combined_dat="${output_prefix}.dat"
        File output_bed="${output_prefix}.bed"
        File output_sorted_bed="${output_prefix}.sorted.bed"
        File output_sorted_bed_idx="${output_prefix}.sorted.bed.idx"
    }

    runtime {
        docker: "vjalili/trf:01"
        disks: "local-disk ${disk_size} SSD"
        cpu: 2
        memory: "16G"
    }
}