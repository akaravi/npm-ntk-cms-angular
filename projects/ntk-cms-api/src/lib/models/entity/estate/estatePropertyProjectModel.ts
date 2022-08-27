
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyProjectModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  body: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?:number;
  keyword: string;
  linkFileIds: string;
  linkExtraImageIds?: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  scoreClick: number;
  scoreSumPercent: number;
  viewCount: number;
  favorited: boolean;
  source: string;
  fromDate: Date;
  expireDate: Date;


  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
  linkExtraImageIdsSrc: string[];
}
