"use strict";(self.webpackChunkGATK_SV=self.webpackChunkGATK_SV||[]).push([[2634],{4159:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(6540);var a=n(4164),r=n(8774),i=n(4586),s=n(2921);const l={features:"features_t9lD",featuresAlt:"featuresAlt_fqNd",featureSvg:"featureSvg_GfXr",heroBanner:"heroBanner_bFdv",buttons:"buttons_wjNP",featureContainer:"featureContainer_oVMe",alignLeft:"alignLeft_eLUL",alignRight:"alignRight_gPIZ",alignCenter:"alignCenter_b0gC",featureImage:"featureImage_n6ct",largeFeatureImage:"largeFeatureImage_zNah",featureContent:"featureContent_StuG",buttonContainer:"buttonContainer_dfcF",featureGallery:"featureGallery_Xm9X",header:"header_Eg75",imageGallery:"imageGallery_FYqm",galleryImage:"galleryImage_KFRl",description:"description_ynef"};var o=n(6025),c=n(4848);const g=function(e){let{header:t,images:n,description:a}=e;return(0,c.jsxs)("div",{className:l.featureGallery,children:[(0,c.jsx)("h2",{className:l.header,children:t}),(0,c.jsx)("div",{className:l.imageGallery,children:n.map(((e,t)=>{const n=(0,o.Ay)(e.src);return(0,c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("img",{className:l.galleryImage,src:n,alt:e.alt||`Image ${t+1}`})},t)}))}),a&&(0,c.jsx)("p",{className:l.description,children:a})]})};const d=function(e){let{imageUrl:t,title:n,description:i,buttons:s,contentAlignment:g,imageAlignment:d,colSize:u="col--6"}=e;const h=(0,o.Ay)(t),m="right"===d?l.alignRight:"center"===d?l.alignCenter:l.alignLeft,p="right"===g?l.alignRight:"center"===g?l.alignCenter:l.alignLeft;return(0,c.jsxs)("div",{className:(0,a.A)("col",u,l.featureContainer),children:[h&&(0,c.jsx)("div",{className:(0,a.A)(l.featureImage,m),children:(0,c.jsx)("img",{className:l.largeFeatureImage,src:h,alt:n||""})}),(0,c.jsxs)("div",{className:(0,a.A)(l.featureContent,p),children:[n&&(0,c.jsx)("h3",{children:n}),i&&(0,c.jsx)("p",{children:i}),s&&s.length>0&&(0,c.jsx)("div",{className:(0,a.A)(l.buttonContainer,p),children:s.map(((e,t)=>(0,c.jsx)(r.A,{className:"button button--primary",to:e.buttonLink,children:e.buttonText},t)))})]})]})};const u=function(e){let{Svg:t,title:n,description:r,colSize:i="col--4",contentAlignment:s="center"}=e;const o="right"===s?"text--right":"center"===s?"text--center":"text--left";return(0,c.jsxs)("div",{className:(0,a.A)("col",i),children:[t&&(0,c.jsx)("div",{className:"text--center",children:(0,c.jsx)(t,{className:l.featureSvg,role:"img"})}),(0,c.jsxs)("div",{className:(0,a.A)(o,"padding-horiz--md"),children:[n&&(0,c.jsx)("h3",{children:n}),r&&(0,c.jsx)("p",{children:r})]})]})},h=[{title:(0,c.jsx)(c.Fragment,{children:"Terra integration"}),description:(0,c.jsxs)(c.Fragment,{children:["Run your data with pre-configured workspaces on the secure",(0,c.jsx)("a",{href:"https://terra.bio",target:"_blank",rel:"noopener noreferrer",children:" Terra platform "})]}),buttons:[{buttonLink:"https://app.terra.bio/#workspaces/broad-firecloud-dsde-methods/GATK-Structural-Variants-Joint-Calling",buttonText:"Joint Calling Workspace"},{buttonLink:"https://app.terra.bio/#workspaces/help-gatk/GATK-Structural-Variants-Single-Sample",buttonText:"Single-Sample Workspace"}],colSize:"col--12"}],m={header:"Featured Projects",images:[{src:"img/logo/gnomad.png",link:"https://gnomad.broadinstitute.org/news/2023-11-v4-structural-variants/",alt:"gnomAD"},{src:"img/logo/allOfUs.png",link:"https://support.researchallofus.org/hc/en-us/articles/27496716922900-All-of-Us-Short-Read-Structural-Variant-Quality-Report",alt:"all-of-us"},{src:"img/logo/hgsvc.png",link:"https://www.hgsvc.org/",alt:"HGSVC"},{src:"img/logo/1kgp.png",link:"https://www.internationalgenome.org/data-portal/data-collection/30x-grch38",alt:"1000-genomes-project"}]},p={header:"Organizations",images:[{src:"img/logo/broad.png",link:"https://www.broadinstitute.org/",alt:"Broad Institute"},{src:"img/logo/talkowskiLab.png",link:"https://talkowski.mgh.harvard.edu/",alt:"Talkowski Lab"},{src:"img/logo/cgm.png",link:"https://cgm.massgeneral.org/",alt:"Center for Genomic Medicine"}]},f=[{title:"Population-scale capabilities",description:(0,c.jsx)(c.Fragment,{children:"Used for SV discovery in flagship research studies including the Genome Aggregation Project (gnomAD) and All of Us."})},{title:"Sensitive and accurate",description:(0,c.jsx)(c.Fragment,{children:"Ensemble calling with multiple SV discovery tools combined with joint genotyping maximize power, and ML-based variant adjudication filters poor quality variants."})},{title:"Cloud-native",description:(0,c.jsx)(c.Fragment,{children:"Built for the Terra genomics platform, enabling scalability, collaboration, and reproducibility in a secure environment."})}];function x(){return(0,c.jsxs)(c.Fragment,{children:[h&&h.length>0&&(0,c.jsx)("section",{className:(0,a.A)(l.features),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:(0,a.A)("row","single-feature-row"),children:h.map(((e,t)=>(0,c.jsx)(d,{...e,contentAlignment:"center",imageAlignment:"center"},t)))})})}),(0,c.jsx)("section",{className:(0,a.A)(l.featuresAlt),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:f.map(((e,t)=>(0,c.jsx)(u,{...e},t)))})})}),(0,c.jsx)("section",{className:(0,a.A)(l.features,l.features),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(g,{...m})})}),(0,c.jsx)("section",{className:(0,a.A)(l.featuresAlt),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(g,{...p})})})]})}const j={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function b(){const{siteConfig:e}=(0,i.A)();return(0,c.jsx)("header",{className:(0,a.A)("hero hero--primary",j.heroBanner),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h1",{className:"hero__title",children:e.title}),(0,c.jsx)("h1",{children:"Enabling scalable, cloud-native structural variant discovery"}),(0,c.jsx)("p",{className:"hero__subtitle",children:"for short-read whole-genome sequencing data"}),(0,c.jsxs)("div",{className:j.buttons,children:[(0,c.jsx)(r.A,{className:"button button--secondary button--lg",to:"/docs/intro",children:"About"}),(0,c.jsx)(r.A,{className:"button button--secondary button--lg",to:"/docs/category/getting-started",children:"Getting Started"})]})]})})}function v(){const{siteConfig:e}=(0,i.A)();return(0,c.jsxs)(s.A,{title:`${e.title}`,description:"A cloud-native pipeline for calling structural variations on short-read sequencing data",children:[(0,c.jsx)(b,{}),(0,c.jsx)("main",{children:(0,c.jsx)(x,{})})]})}}}]);