/**
 * مدل نتیجه Ping میکروسرویس (RTT)
 */
export class CoreLogMicroServicePingModel {
  id?: string;
  requestId: string;
  appInfo: string;
  pingTimestamp: Date;
  pongTimestamp: Date;
  rttMs: number;
}
