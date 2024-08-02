import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// Data structure with sales and expenses
const data = [
  { month: 'Jan', sales: 40, expenses: 24 },
  { month: 'Feb', sales: 30, expenses: 14 },
  { month: 'Mar', sales: 20, expenses: 98 },
  { month: 'Apr', sales: 27, expenses: 39 },
  { month: 'May', sales: 18, expenses: 48 },
  { month: 'Jun', sales: 23, expenses: 38 },
  { month: 'Jul', sales: 34, expenses: 43 },
  { month: 'Aug', sales: 40, expenses: 24 },
  { month: 'Sep', sales: 30, expenses: 14 },
  { month: 'Oct', sales: 20, expenses: 98 },
  { month: 'Nov', sales: 27, expenses: 39 },
  { month: 'Dec', sales: 18, expenses: 48 },
];

// Custom shape for rounded bars
const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 7;

  return (
    <g>
      <path
        d={`M${x + radius},${y + height} 
           L${x + radius},${y} 
           Q${x},${y} ${x},${y + radius} 
           L${x},${y + height} 
           Z
           M${x + width},${y + height} 
           L${x + width},${y + radius} 
           Q${x + width},${y} ${x + width - radius},${y} 
           L${x + width - radius},${y} 
           Q${x + width - radius},${y} ${x + width - radius},${y + height} 
           Z`}
        fill={fill}
      />
    </g>
  );
};
const CustomXAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} dy={16} fontSize={12} textAnchor="middle" fill="#666">
      {payload.value}
    </text>
  );
};

const CustomLegend = (props) => {
  const { payload } = props;

  return (
    <div className="flex space-x-4 justify-center mt-3">
      {payload.map((entry) => (
        <div key={entry.value} className="flex items-center space-x-2">
          <div
            style={{
              backgroundColor: entry.color,
              width: 12,
              height: 12,
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};
const ClusterChart = () => {
  return (
    <BarChart width={750} height={350} data={data} barCategoryGap={10} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid stroke="none" vertical={false} />
      <XAxis dataKey="month" tick={<CustomXAxisTick />}/>
      <YAxis ticks={[20, 40, 60, 80, 100]} />
      <Tooltip />
      <Legend content={<CustomLegend />} />
      <Bar dataKey="sales" fill="#f7b53f" name="Sales" shape={<RoundedBar />} />
      <Bar dataKey="expenses" fill="#537ecc" name="Expenses" shape={<RoundedBar />} />
    </BarChart>
  );
};

export default ClusterChart;
