import { File360TourHotSpotModel } from "./file360TourHotSpotModel";

export class File360ViewModel {
  title: string;
  description: string;
  htmlBody: string;
  linkFileId: number;
  linkFileIdSrc: string;
  linkFileIdThumbnailSrc:string;
  configDataJson: string;
  hotSpots:File360TourHotSpotModel[];
}

