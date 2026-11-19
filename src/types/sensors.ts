export type MetricKey = 'co2' | 'temperature' | 'humidity' | 'pressure' | 'illuminance' | 'sound_level_proxy';
export type Metric = { value: number | null; unit: string; valid: boolean };
export type Telemetry = {
 room_id: string; node_id: string; uptime_s: number; timestamp_utc: string | null;
 sensors: Record<MetricKey, Metric> & { motion: { value: boolean | null; valid: boolean } };
 flags: { stale_data: boolean; sensor_fault: boolean };
};
export type Room = { id: string; name: string; building: string; online: boolean; telemetry: Telemetry; history: { time: string; co2: number | null; temperature: number | null; humidity: number | null }[] };
