---
sidebar_label: Quick Start
sidebar_position: 1
---

# Quick Start

## WDLs
There are two scripts for running the full pipeline:
* `wdl/GATKSVPipelineBatch.wdl`: Runs GATK-SV on a batch of samples.
* `wdl/GATKSVPipelineSingleSample.wdl`: Runs GATK-SV on a single sample, given a reference panel

## Inputs
Example workflow inputs can be found in `/inputs`. All required resources are available in public Google buckets.

## MELT
**Important**: The example input files contain MELT inputs that are NOT public (see [Requirements](#requirements)). These include:

* `GATKSVPipelineSingleSample.melt_docker` and `GATKSVPipelineBatch.melt_docker` - MELT docker URI (see [Docker readme](https://github.com/talkowski-lab/gatk-sv-v1/blob/master/dockerfiles/README.md))
* `GATKSVPipelineSingleSample.ref_std_melt_vcfs` - Standardized MELT VCFs ([Module00c](#module00c))

The input values are provided only as an example and are not publicly accessible. In order to include MELT, these values must be provided by the user. MELT can be disabled by deleting these inputs and setting `GATKSVPipelineBatch.use_melt` to `false`.

## Requester pays buckets
**Important**: The following parameters must be set when certain input data is in requester pays (RP) buckets:

* `GATKSVPipelineSingleSample.requester_pays_cram` and `GATKSVPipelineBatch.Module00aBatch.requester_pays_crams` - set to `True` if inputs are CRAM format and in an RP bucket, otherwise `False`.
* `GATKSVPipelineBatch.GATKSVPipelinePhase1.gcs_project_for_requester_pays` - set to your Google Cloud Project ID if gVCFs are in an RP bucket, otherwise omit this parameter.

## Execution
We recommend running the pipeline on a dedicated [Cromwell](https://github.com/broadinstitute/cromwell) server with a [cromshell](https://github.com/broadinstitute/cromshell) client. A batch run can be started with the following commands:

```
> mkdir gatksv_run && cd gatksv_run
> mkdir wdl && cd wdl
> cp $GATK_SV_V1_ROOT/wdl/*.wdl .
> zip dep.zip *.wdl
> cd ..
> cp $GATK_SV_V1_ROOT/inputs/GATKSVPipelineBatch.ref_panel_1kg.json GATKSVPipelineBatch.my_run.json
> cromshell submit wdl/GATKSVPipelineBatch.wdl GATKSVPipelineBatch.my_run.json cromwell_config.json wdl/dep.zip
```

where `cromwell_config.json` is a Cromwell [workflow options file](https://cromwell.readthedocs.io/en/stable/wf_options/Overview/). Note users will need to re-populate batch/sample-specific parameters (e.g. BAMs and sample IDs).
