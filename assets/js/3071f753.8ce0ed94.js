"use strict";(self.webpackChunkGATK_SV=self.webpackChunkGATK_SV||[]).push([[591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"GenotypeBatch",description:"Genotype Batch",sidebar_position:9,slug:"gb"},o=void 0,l={unversionedId:"modules/genotype_batch",id:"modules/genotype_batch",title:"GenotypeBatch",description:"Genotype Batch",source:"@site/docs/modules/genotype_batch.md",sourceDirName:"modules",slug:"/modules/gb",permalink:"/gatk-sv/docs/modules/gb",draft:!1,editUrl:"https://github.com/broadinstitute/gatk-sv/tree/master/website/docs/modules/genotype_batch.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"GenotypeBatch",description:"Genotype Batch",sidebar_position:9,slug:"gb"},sidebar:"tutorialSidebar",previous:{title:"MergeBatchSites",permalink:"/gatk-sv/docs/modules/msites"},next:{title:"ReGenotypeCNVs",permalink:"/gatk-sv/docs/modules/rgcnvs"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Genotypes a batch of samples across unfiltered variants combined across all batches."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filter batch"),(0,a.kt)("li",{parentName:"ul"},"Merge Batch Sites")),(0,a.kt)("h3",{id:"inputs"},"Inputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Batch PESR and depth VCFs (FilterBatch)"),(0,a.kt)("li",{parentName:"ul"},"Cohort PESR and depth VCFs (MergeBatchSites)"),(0,a.kt)("li",{parentName:"ul"},"Batch read count, PE, and SR files (GatherBatchEvidence)")),(0,a.kt)("h3",{id:"outputs"},"Outputs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Filtered SV (non-depth-only a.k.a. "PESR") VCF with outlier samples excluded'),(0,a.kt)("li",{parentName:"ul"},"Filtered depth-only call VCF with outlier samples excluded"),(0,a.kt)("li",{parentName:"ul"},"PED file with outlier samples excluded"),(0,a.kt)("li",{parentName:"ul"},"List of SR pass variants"),(0,a.kt)("li",{parentName:"ul"},"List of SR fail variants"),(0,a.kt)("li",{parentName:"ul"},"(Optional) Depth re-genotyping intervals list")))}d.isMDXComponent=!0}}]);