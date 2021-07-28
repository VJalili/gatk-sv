---
sidebar_position: 12
---

# Troubleshooting

## VM runs out of memory or disk
* Default pipeline settings are tuned for batches of 100 samples. Larger batches or cohorts may require additional VM resources. Most runtime attributes can be modified through the `RuntimeAttr` inputs. These are formatted like this in the json:
```
"ModuleX.runtime_attr_override": {
  "disk_gb": 100,
  "mem_gb": 16
},
```
Note that a subset of the struct attributes can be specified. See `wdl/Structs.wdl` for available attributes.
