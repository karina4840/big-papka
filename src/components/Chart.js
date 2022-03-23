import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const Chart = ({ color, data }) => {
  return (
    <div>
      <Sparklines 
      svgHeight={80} 
      svg Width={60} 
      data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>

  );
}

export default Chart;

