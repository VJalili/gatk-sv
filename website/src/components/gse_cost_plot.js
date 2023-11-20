import { useColorMode } from '@docusaurus/theme-common';
import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Plot from 'react-plotly.js';
import Parser from 'papaparse';

function GSECostPlot() {
  const { colorMode, setColorMode } = useColorMode();

  const [data, setData] = useState([]);
  const filename = useBaseUrl('/data/gse_cost.csv')
  const singleSampleColor = colorMode == 'dark' ? '#25c2a0' : '#0f4e40'
  const multiSampleColor = colorMode == 'dark' ? '#794fef' : '#260b75'

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

        const rows = parsedData;

        const plotData = [];

        for (let i = 0; i < rows.length; i++) {
          const [groupName, ...rowValues] = rows[i];
          const y = rowValues.map(Number); // Convert string values to numbers

          plotData.push({
            x: groupName,
            y: y,
            type: 'violin',
            boxpoints: 'all',
            box: {
              visible: true,
            },
            points: 'all',
            jitter: 0.9,
            name: groupName,
            marker: {
              size: 3,
            },
            line: {
              width: 2,
            },
            hoveron: "closest",
            showlegend: false,
          });
        }

        setData(plotData);
      });
  }, []);

  if (data)
    return (
     <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Plot
        layout={{
          title: 'GatherSampleEvidence Execution Cost',
          font: {color: colorMode == 'dark' ? 'rgba(255,255,255,0.5)' : 'rgb(0,0,0)'},
          xaxis: {
            title: 'Cohort',
            ticklen: 6
          },
          yaxis: {
            title: 'Per-sample Cost (USD)',
            gridcolor: colorMode == 'dark' ? 'rgba(200,200,200,0.1)' : 'rgba(255,255,255,1)',
            ticklen: 6
          },

          autosize: true,
          plot_bgcolor: colorMode == 'dark' ? 'rgba(200,200,200,0.1)' : 'rgb(234,234,234)',
          paper_bgcolor: colorMode == 'dark' ? 'rgba(234,234,234,0.0)' : 'rgb(255,255,255)',
          margin: {t:50, l:50, r:50, b:50},
        }}
        useResizeHandler={true}
        style={{ width: '100%', height: '100%' }}
        data={data}
        config={{ scrollZoom: true, displaylogo: false }}
      />
      </div>
    );
}

export default GSECostPlot;