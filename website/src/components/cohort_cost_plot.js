import { useColorMode } from '@docusaurus/theme-common';
import React, { useEffect, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Plot from 'react-plotly.js';
import Parser from 'papaparse';

function CohortCostPlot() {
  const { colorMode, setColorMode } = useColorMode();

  const [data, setData] = useState([]);
  const filename = useBaseUrl('/data/cohort_cost.csv');
  const singleSampleColor = colorMode == 'dark' ? '#25c2a0' : '#0f4e40';
  const multiSampleColor = colorMode == 'dark' ? '#794fef' : '#260b75';

  // Parse the data asynchronously.
  useEffect(() => {
    fetch(filename)
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Parser.parse(data, {
          header: true,
          skipEmptyLines: true,
          fastMode: true,
          delimiter: ',',
        }).data;

        const headers = Object.keys(parsedData[0]).slice(1);

        const plotData = headers.map((header) => ({
          x: parsedData.map((row) => parseFloat(row[header])),
          y: parsedData.map((row) => row[Object.keys(row)[0]]),
          type: 'bar',
          orientation: 'h',
          name: header,
          hoverinfo: 'x+name'
        }));

        setData(plotData);
      });
  }, []);

  if (data)
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Plot
          layout={{
            title: 'Cohort Mode Execution Cost',
            font: { color: colorMode == 'dark' ? 'rgba(255,255,255,0.5)' : 'rgb(0,0,0)' },
            xaxis: {
              title: 'Percentage of the pipeline execution cost',
              gridcolor: colorMode == 'dark' ? 'rgba(200,200,200,0.1)' : 'rgba(255,255,255,1)',
              range: [0, 100],
              ticklen: 6
            },
            yaxis: {
              //title: 'Cohort',
              gridcolor: colorMode == 'dark' ? 'rgba(200,200,200,0.1)' : 'rgba(255,255,255,1)',
              automargin: true,
              ticklen: 6
            },
            autosize: true,
            barmode: 'stack',
            plot_bgcolor: colorMode == 'dark' ? 'rgba(200,200,200,0.1)' : 'rgb(234,234,234)',
            paper_bgcolor: colorMode == 'dark' ? 'rgba(234,234,234,0.0)' : 'rgb(255,255,255)',
            margin: { t: 50, l: 50, r: 50, b: 50 },
            legend: {
              x: 0.5,
              y: -0.6,
              'orientation': 'h',
              xanchor: 'center',
              traceorder: 'normal'
            }
          }}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
          data={data}
          config={{ displaylogo: false }}
        />
      </div>
    );
}

export default CohortCostPlot;
