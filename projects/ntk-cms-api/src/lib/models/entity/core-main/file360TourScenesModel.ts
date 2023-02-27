import { File360TourHotSpotModel } from "./file360TourHotSpotModel";

export class File360TourScenesModel{
  title: string;
  hfov:number;
  pitch:number;
  yaw:number;
  type:string;
  panorama:string;
  hotSpots:File360TourHotSpotModel[];
}
