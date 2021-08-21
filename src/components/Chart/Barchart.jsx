import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

import { barData as data } from '../../data';

const Barchart = () => {
  return (
    <div>
      <ResponsiveContainer width='100%' aspect={1 / 0.8}>
        <BarChart data={data} margin={{ top: 20 }}>
          <XAxis dataKey='name' fontSize={7} />
          <Bar
            dataKey='pv'
            stackId='a'
            fill='blue'
            barSize={8}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey='uv'
            stackId='a'
            fill='#75E6DA'
            barSize={8}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
