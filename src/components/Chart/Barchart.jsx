import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'M',
    uv: 50,
    pv: 100,
  },
  {
    name: 'T',
    uv: 80,
    pv: 150,
  },
  {
    name: 'W',
    uv: 69,
    pv: 200,
  },
  {
    name: 'T',
    uv: 46,
    pv: 110,
  },
  {
    name: 'F',
    uv: 88,
    pv: 205,
  },
  {
    name: 'S',
    uv: 79,
    pv: 91,
  },
  {
    name: 'S',
    uv: 72,
    pv: 300,
  },
];

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
