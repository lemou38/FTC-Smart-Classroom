import {ResponsiveContainer,LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip} from 'recharts';
import type {Room} from '../types/sensors';
export default function SensorChart({room,metric}:{room:Room;metric:'co2'|'temperature'|'humidity'}){
 return <div className="chart-area"><ResponsiveContainer width="100%" height="100%"><LineChart data={room.history}><CartesianGrid strokeDasharray="3 3" stroke="var(--grid)" vertical={false}/><XAxis dataKey="time" tick={{fontSize:11,fill:'var(--muted)'}} minTickGap={25}/><YAxis domain={['auto','auto']} tick={{fontSize:11,fill:'var(--muted)'}} width={45}/><Tooltip contentStyle={{background:'var(--panel)',border:'1px solid var(--border)',borderRadius:12,color:'var(--text)'}}/><Line type="monotone" dataKey={metric} stroke="#19a7a0" strokeWidth={3} dot={false} isAnimationActive={false}/></LineChart></ResponsiveContainer></div>;
}
