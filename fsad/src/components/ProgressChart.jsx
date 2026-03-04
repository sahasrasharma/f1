import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip } from 'recharts';

export default function ProgressChart(){
const data=[
{name:'Mon',cal:1200},
{name:'Tue',cal:1500},
{name:'Wed',cal:1300},
{name:'Thu',cal:1600},
{name:'Fri',cal:1700}
];

return(
<LineChart width={400} height={300} data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Line type="monotone" dataKey="cal" />
</LineChart>
)
}