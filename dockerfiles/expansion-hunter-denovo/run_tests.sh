#!/bin/sh

# Test an example use-case given in:
# https://github.com/Illumina/ExpansionHunterDenovo/blob/master/documentation/05_Computing_profiles.md
wget -O input.bam http://hgdownload.cse.ucsc.edu/goldenPath/hg19/encodeDCC/wgEncodeUwRepliSeq/wgEncodeUwRepliSeqBg02esG1bAlnRep1.bam
wget -O reference.fa.gz http://hgdownload.cse.ucsc.edu/goldenPath/hg19/chromosomes/chr1.fa.gz
gunzip reference.fa.gz

ExpansionHunterDenovo profile \
                      --reads input.bam \
                      --reference reference.fa \
                      --output-prefix output \
                      --min-anchor-mapq 50 \
                      --max-irr-mapq 40

# A successful exit (i.e., exit code is 0) may not be a good assertion of
# if the program worked "correctly". An ideal test would be using test data
# and asserting the content of output files.
exit_code=$?
if [ $exit_code == 0 ]
then
  echo "Test successful."
else
  echo "Test failed."
fi
exit $exit_code
