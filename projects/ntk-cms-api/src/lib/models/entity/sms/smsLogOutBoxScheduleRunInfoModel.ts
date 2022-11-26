//@@tag-Version-2201011
export class SmsLogOutBoxScheduleRunInfoModel{
  scheduleLockerId:string;
  scheduleLockedRun?:Date;
  scheduleLockedEnd?:Date;
  scheduleLockerMicroservice:string;
  isSuccess:boolean;
  errorMessage:string;
}
