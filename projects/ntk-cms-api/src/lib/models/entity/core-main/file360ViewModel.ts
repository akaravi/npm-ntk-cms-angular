import { File360TourHotSpotModel } from "./file360TourHotSpotModel";

export class File360ViewModel {
  title: string;
  description: string;
  htmlBody: string;
  linkFileId: number;
  panorama: string;
  preview: string;
  configDataJson: string;
  hotSpots: File360TourHotSpotModel[];
}

