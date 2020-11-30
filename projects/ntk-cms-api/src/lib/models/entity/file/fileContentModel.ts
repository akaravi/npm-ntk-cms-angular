import { FileCategoryModel } from './fileCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class FileContentModel extends BaseModuleEntity<number> {
  LinkCategoryId: number;
  Title: string;
  Description: string;
  Body: string;
  FromDate: Date;
  Geolocationlatitude: number;
  Geolocationlongitude: number;
  Keyword: string;
  LinkFileIds: string;
  LinkFilePodcastId: number;
  LinkFileMovieId: number;
  LinkMainImageId: number;
  ScoreClick: number;
  ScoreSumPercent: number;
  ViewCount: number;
  Favorited: boolean;

  ExpireDate: Date;
  ModuleCoreCreatedBy: string;
  ModuleCoreUpdatedBy: string;
  Source: string;
  // tslint:disable-next-line: variable-name
  virtual_Category: FileCategoryModel;
  Category: FileCategoryModel;
  OtherInfos: string;
  ContentAndParameterValues: any;
  LinkMainImageIdSrc: string;

}
