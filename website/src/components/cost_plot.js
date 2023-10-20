import React, { useEffect } from 'react';
import Plot from 'react-plotly.js';
import { useColorMode } from '@docusaurus/theme-common';

function CostPlot() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Plot
      layout={{ title: 'A Fancy Plot', autosize: true }}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
      data={[
        {
          y: [1, 2, 3, 4, 4, 4, 8, 9, 10],
          type: 'box',
          name: 'Sample A',
          marker: {
            color: colorMode == 'dark' ? 'rgb(214,12,140)' : 'rgb(0,0,0)',
          }
        },
        {
          y: [2, 3, 3, 3, 3, 5, 6, 6, 7],
          type: 'box',
          name: 'Sample B',
          marker: {
            color: 'rgb(0,128,128)'
          }
        },
      ]}
    />
  );
}

export default CostPlot;