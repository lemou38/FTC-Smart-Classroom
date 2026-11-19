import type { Room, Telemetry } from '../types/sensors';
const seed = [
 { id:'IGE1', name:'Salle IGE1', building:'Bloc pédagogique A', co2:620, temp:23.4, humidity:48.2 },
 { id:'IGE2', name:'Salle IGE2', building:'Bloc pédagogique A', co2:810, temp:24.1, humidity:52.0 },
 { id:'LAB-01', name:'Laboratoire réseaux', building:'Bloc laboratoires', co2:540, temp:22.8, humidity:45.3 },
 { id:'AMPHI-A', name:'Amphithéâtre A', building:'Bâtiment central', co2:930, temp:25.2, humidity:56.4 },
];
const metric = (value: number, unit: string) => ({ value, unit, valid: true });
const jitter = (v:number, spread:number) => Math.round((v+(Math.random()-.5)*spread)*10)/10;
export function makeTelemetry(id:string, co2:number, temp:number, humidity:number, uptime=0):Telemetry {
 return { room_id:id, node_id:`FTC-SC-${id}`, uptime_s:uptime, timestamp_utc:new Date().toISOString(), sensors:{
 co2:metric(Math.round(co2),'ppm'), temperature:metric(temp,'°C'), humidity:metric(humidity,'%RH'),
 pressure:metric(jitter(1012.6,2),'hPa'), illuminance:metric(Math.round(jitter(315,90)),'lx'),
 motion:{value:Math.random()>.45,valid:true}, sound_level_proxy:metric(Math.max(0,Math.min(1,jitter(.18,.12))),'relative')
 }, flags:{stale_data:false,sensor_fault:false} };
}
export function initialRooms():Room[] { return seed.map((s,i)=>{
 const telemetry=makeTelemetry(s.id,s.co2,s.temp,s.humidity);
 return {...s,online:true,telemetry,history:Array.from({length:16},(_,j)=>({time:new Date(Date.now()-(15-j)*5000).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),co2:Math.round(s.co2+(j-8)*3+(i*7)),temperature:s.temp,humidity:s.humidity}))};
 }); }
export function tickRooms(rooms:Room[]):Room[] {return rooms.map(room=>{
 if(!room.online)return room;
 const s=room.telemetry.sensors;
 const next=makeTelemetry(room.id,jitter(s.co2.value??600,30),jitter(s.temperature.value??23,.3),jitter(s.humidity.value??50,1.2),room.telemetry.uptime_s+5);
 const history=[...room.history,{time:new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}),co2:next.sensors.co2.value,temperature:next.sensors.temperature.value,humidity:next.sensors.humidity.value}].slice(-30);
 return {...room,telemetry:next,history};
 });}
