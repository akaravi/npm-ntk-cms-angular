import { File360TourHotSpotModel } from "./file360TourHotSpotModel";

export class File360TourScenesModel{
  guid:string;
  title: string;
  hfov:number;
  pitch:number;
  yaw:number;
  type:string;
  linkFileId: number;
  panorama: string;
  preview:string;
  hotSpots:File360TourHotSpotModel[];
}
