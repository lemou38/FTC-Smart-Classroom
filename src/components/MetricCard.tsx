import type { ReactNode } from 'react';
export default function MetricCard({title,value,unit,icon,detail}:{title:string;value:number|null;unit:string;icon:ReactNode;detail?:string}){
 return <div className="metric card"><div className="metric-top"><span>{title}</span><span className="metric-icon">{icon}</span></div><div className="metric-value">{value===null?'—':value.toLocaleString('fr-FR',{maximumFractionDigits:1})}<small> {unit}</small></div><div className="muted small">{detail??'Mesure simulée'}</div></div>;
}
