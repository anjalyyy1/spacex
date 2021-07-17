import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

type Props = {
  data: any[];
};

const Chart: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
