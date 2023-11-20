---
title: Execution Costs
description: Detailed guidelines for accurate projection of GATK-SV execution costs
sidebar_position: 3
slug: ./cost
---

import ExeModesCostPlot from "../../src/components/modes_cost_plot.js"
import CohortCostPlot from "../../src/components/cohort_cost_plot.js"
import GSECostPlot from "../../src/components/gse_cost_plot.js"
import FigureCaption from "../../src/components/figure_caption.js"


This section offers an in-depth examination of the GATK-SV's execution costs. 
Being a cloud-native pipeline, GATK-SV necessitates allocating cloud resources, 
leading to cloud usage expenses. These costs fluctuate based on the size and 
specific features of the cohort under analysis. A thorough understanding of 
the operational expenses of running GATK-SV is essential for effective 
budget planning and cost control. 
This document details the cost components for each pipeline stage and offers 
guidance to help users estimate and manage these costs effectively.


To streamline the budgeting process for running GATK-SV, 
we have organized this process into the following categories, 
each of which will be explored in-depth in the following sections.  


- [One-time cloud resource expenses incurred during GATK-SV execution;](#pipeline-run-costs)
- [Ongoing data storage costs for inputs and GATK-SV outputs;](#storage-costs)
- [Costs incurred from job retries and adjustments.](#retries)


:::info
Please note that the costs mentioned on this page are associated 
with workflows executed in the Terra workspace on the Google Cloud Platform.
:::



## Cloud Resource Costs for GATK-SV Execution: One-Time Expenses {#pipeline-run-costs}

Several factors, including cohort size and sample characteristics, 
influence the running cost of GATK-SV. Optimized for both small and 
large cohorts, GATK-SV offers two execution modes. 


1. **Single-Sample Mode**: 
   Best for smaller cohorts of fewer than 100 samples. 
   This mode is streamlined for ease of use, requiring only a single workflow execution. 
   However, it is less cost-effective, incurring higher per-sample execution costs than the cohort mode. 


2. **Cohort Mode**:
   Tailored for larger cohorts exceeding 100 samples, 
   this mode significantly reduces the per-sample execution cost. 
   However, this mode is more complex than the single-sample mode, involving running 
   multiple workflows in tandem, and is not applicable for smaller cohorts. 
   A detailed breakdown of its execution costs, involving running multiple workflows, is provided in 
   [this](#in-depth-cohort-mode-cost) section.


Hence, you may select the execution mode according to your cohort size for optimal 
per-sample execution cost. The following figure plots the average per-sample 
execution costs for GATK-SV across different cohort sizes in both modes.


<ExeModesCostPlot />

<FigureCaption number="1">
    sdfs
</FigureCaption>




### In-depth exploration of cohort mode cost structure {#in-depth-cohort-mode-cost}

The Cohort mode in GATK-SV divides the pipeline into multiple workflows 
to enhance scalability and cost-effectiveness. These workflows vary in their operational scope: 
some process individual samples, others handle batches, and a few work on the entire cohort. 
This variation makes precise per-sample cost estimation challenging; 
instead, per-sample costs are best approximated by considering the entire 
cohort’s execution expense relative to its size. 


Additionally, each workflow deals with different input types and incurs distinct execution costs. 
Notably, the [`GatherSampleEvidence`](/docs/modules/gse) workflow, 
which processes CRAM files to extract raw structural variation calls, 
accounts for the largest share of the pipeline's total cost. 
The following figure plots the contribution of each workflow to the overall 
Cohort mode execution cost as a percentage across different cohorts.


<CohortCostPlot />
<FigureCaption number="2">
    sdfs
</FigureCaption>


The [`GatherSampleEvidence`](/docs/modules/gse) workflow operates on a per-sample basis 
and accounts for the largest proportion of the pipeline’s total execution cost. 
Hence, accurately approximating its execution cost is crucial for forecasting 
the overall execution cost of the pipeline for a given cohort. 
However, this workflow’s execution cost is significantly influenced by 
the sequencing read characteristics in the input CRAM files, 
which leads to high variability in its execution costs. 


To illustrate this variability, the following figure plots the per-sample 
execution costs of the [`GatherSampleEvidence`](/docs/modules/gse) workflow 
for 100 randomly chosen samples across various cohorts. 
The figure demonstrates the cost variability both within a single cohort and 
comparatively between different cohorts. 
Understanding this variability is instrumental for accurately budgeting 
for the total cost of running the Cohort Mode, 
especially given the significant impact of this workflow on the total execution cost.


<GSECostPlot />
<FigureCaption number="3">
    sdfs
</FigureCaption>


## Continuous costs for input and output data storage {#storage-costs}

The GATK-SV pipeline requires the input data to be available in cloud buckets, 
and it also stores its generated outputs in a cloud bucket. 
This storage practice incur costs typically calculated on a per-gigabyte-per-month basis. 
While using cloud storage is necessary for the duration of the pipeline's execution, 
you may decide to download and remove this data post-analysis, 
subject to data access regulations. 
This can help avoid additional storage costs after the analysis.


Despite this option, there is a growing preference for keeping data in the cloud 
due to the benefits of easier access, sharing, and enhanced security. 
If you choose to continue keeping the data on the cloud, 
it is essential to factor in the ongoing costs, which are calculated per-gigabyte-per-month. 



## Expenses Associated with Job Retries and Adjustments {#retries}

When planning the budget for GATK-SV workflow execution, 
it is crucial to include additional funds to cover potential retries and adjustments. 
These extra costs may arise in several scenarios.


* **Retrying failed samples with updated configurations**:
  Despite GATK-SV’s optimization for scalability, some steps of the pipeline may still fail 
  to process specific samples. For example, the pipeline is designed to allocate 
  cloud resources efficiently for each task to minimize costs. 
  However, variability in sample characteristics can lead to underestimation 
  of required resources (e.g., RAM or disk space), resulting in task failures. 
  In such cases, you need to rerun the failed tasks with manually adjusted runtime resources.


* **Correcting and resubmitting tasks with incorrect inputs**
  If tasks are submitted with incorrect inputs, you might only realize the error 
  after some samples have been partially processed. This scenario requires 
  aborting the ongoing task and resubmitting it with the correct inputs.


Incorporating a buffer in your budget for such unforeseen circumstances is vital, 
as they can significantly impact the overall cost and timeline of your project. 
Figure XYZ includes all such retries in generating the structural 
variations call set for the plotted cohorts. 
