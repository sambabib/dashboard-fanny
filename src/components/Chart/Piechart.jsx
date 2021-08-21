import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import { pieData as data } from '../../data'

const Piechart = () => {
  return (
    <div>
      <ResponsiveContainer width='100%' height='100%' aspect={0.4 / 0.4}>
        <RadialBarChart
          width={100}
          height={100}
          cx={60}
          cy={70}
          innerRadius={35}
          outerRadius={50}
          barSize={4}
          data={data}
        >
          <RadialBar background dataKey='uv' />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
