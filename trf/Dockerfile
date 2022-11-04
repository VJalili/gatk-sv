# Contains tools required for creating a catalog of tandem repeats.
# List of tools:
# - Tandem Repeat Finder (TRF);
# - BCFTools;
# - SAMTools
# - HTSLIB
# - Java JRE
# - IGV

FROM ubuntu:22.10

ARG HTSLIB_VER=1.15.1
ARG BCFTOOLS_VER=1.15.1
ARG SAMTOOLS_VER=1.15.1
ARG TRF_VER=trf409.linux64
ARG IGV_VER_MAJOR=2.15
ARG IGV_VER=2.15.1

RUN apt-get update && apt-get install --no-install-recommends -qqy \
    wget \
    tabix \
    bzip2 \
    unzip \
    make \
    gcc \
    g++ \
    zlib1g-dev \
    libbz2-dev \
    liblzma-dev \
    libcurl4-gnutls-dev \
    libncurses5-dev \
    libncursesw5-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3.10-dev \
    python3-pip \
    python3-wheel \
    python3-venv \
    python3-setuptools \
    default-jre \
    ca-certificates && \
    update-ca-certificates && \
    ln -s /usr/bin/python3 /usr/bin/python

# Install Tandem Repeat Finder (Benson, G. (1999)).
RUN wget -O trf http://tandem.bu.edu/trf/downloads/$TRF_VER --no-check-certificate && \
    mkdir /opt/trf && mv trf /opt/trf/ && \
    chmod 777 /opt/trf/trf
ENV PATH="/opt/trf:$PATH"

# Copy the scripts used to convert TRF output to BED.
COPY dat_to_bed.py /opt/trf/
RUN pip install -q tqdm==4.64.1

# Install htslib, bcftools, & samtools.
RUN wget -O htslib.tar.bz2 https://github.com/samtools/htslib/releases/download/$HTSLIB_VER/htslib-$HTSLIB_VER.tar.bz2 && \
    mkdir htslib && tar -xvjf htslib.tar.bz2 -C htslib --strip-components=1 && rm htslib.tar.bz2 && \
    cd htslib && ./configure && make && make install && cd .. && \
    wget -O bcftools.tar.bz2 https://github.com/samtools/bcftools/releases/download/$BCFTOOLS_VER/bcftools-$BCFTOOLS_VER.tar.bz2 && \
    mkdir bcftools && tar -xvjf bcftools.tar.bz2 -C bcftools --strip-components=1 && rm bcftools.tar.bz2 && \
    cd bcftools && ./configure && make && make install && cd .. && \
    wget -O samtools.tar.bz2 https://github.com/samtools/samtools/releases/download/$SAMTOOLS_VER/samtools-$SAMTOOLS_VER.tar.bz2 && \
    mkdir samtools && tar -xvjf samtools.tar.bz2 -C samtools --strip-components=1 && rm samtools.tar.bz2 && \
    cd samtools && ./configure && make && make install && cd ..
ENV PATH="/opt/bcftools:$PATH"
ENV PATH="/opt/htslib:$PATH"
ENV PATH="/opt/samtools:$PATH"

# Install IGV
RUN wget -O igv.zip https://data.broadinstitute.org/igv/projects/downloads/$IGV_VER_MAJOR/IGV_$IGV_VER.zip && \
    mkdir /opt/igv && mv igv.zip /opt/igv && cd /opt/igv/ && unzip igv.zip && mv IGV_$IGV_VER/* . && \
    rm -r IGV_$IGV_VER igv.zip && cd ..
ENV PATH="/opt/igv:$PATH"


# Clean up
RUN rm -rf /tmp/* \
    /var/tmp/* \
    /var/cache/apt/* \
    /var/lib/apt/lists/*
