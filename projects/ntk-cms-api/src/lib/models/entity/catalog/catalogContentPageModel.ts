import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
//@@tag-Version-2201011
export class CatalogContentPageModel {
  id: string;
  pageIndex: number;
  title: string;
  description: string;
  body: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationId?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  linkFileIds: string;
  linkFilePodcastId?: number;
  linkFileMovieId?: number;
  linkMainImageId?: number;
  file360Views: File360ViewModel[];
  file360Tour: File360TourModel;
  viewCount: number;
  linkMainImageIdSrc: string;
  linkFilePodcastIdSrc: string;
  linkFileMovieIdSrc: string;
  linkFileIdsSrc: string[];
}
