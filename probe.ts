import { performance } from 'perf_hooks'
import { logger } from './logger';

export default () => {
    let memStats: Record<string | number, number> = {};
    const perf = performance;

    const start = perf.now();
    const cpuUsage = process.cpuUsage()

    
    process.nextTick(() => {
      const current = process.memoryUsage();
      for (const key in current) {
        memStats[key] = Math.max(memStats[key] ?? 0, current[key as keyof ReturnType<typeof process.memoryUsage>]);
      }
    });
    
    process.on("exit", () => {
      logger.info({
        memStats,
        timeMilliseconds: perf.now() - start,
        cpuUsage: process.cpuUsage(cpuUsage),
        pid: process.pid,
      });
    });
  };
  