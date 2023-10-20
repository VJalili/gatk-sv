import { useColorMode } from '@docusaurus/theme-common';
import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Plot from 'react-plotly.js';
import Parser from 'papaparse';

function CostPlot() {
  const { colorMode, setColorMode } = useColorMode();

  const [data, setData] = useState([]);
  const filename = useBaseUrl('/data/cost.csv')
  const singleSampleColor = colorMode == 'dark' ? 'rgb(214,0,0)' : 'rgb(0,0,0)'
  const multiSampleColor = colorMode == 'dark' ? 'rgb(214,0,0)' : 'rgb(0,0,0)'

  // Parse the data asynchronously.
  useEffect(() => {
    fetch(filename)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Parser.parse(data, {
          header: false,
          skipEmptyLines: true,
          fastMode: true,
          delimiter: ','
        }).data;
        setData(parsedData);
      });
  }, []);

  if (data)
    return (
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Plot
        layout={{
          title: 'Cost plot',
          autosize: true,
          plot_bgcolor: colorMode == 'dark' ? 'rgba(234,234,234,0.1)' : 'rgb(234,234,234)',
          paper_bgcolor: colorMode == 'dark' ? 'rgba(234,234,234,0.0)' : 'rgb(255,255,255)'
        }}
        useResizeHandler={true}
        style={{ width: "100%", height: "100%" }}
        data={[
          {
            y: data[0],
            type: 'box',
            boxpoints: 'all',
            jitter: 0.8,
            whiskerwidth: 0.5,
            name: 'Single-sample Pipeline',
            marker: {
              size: 5,
              color: singleSampleColor,
            },
            line: {
              width: 2
            }
          },
          {
            y: data[1],
            type: 'box',
            name: 'Multi-sample Pipeline',
            marker: {
              color: multiSampleColor,
            }
          },
        ]}
      />
      </div>
    );
}

export default CostPlot;