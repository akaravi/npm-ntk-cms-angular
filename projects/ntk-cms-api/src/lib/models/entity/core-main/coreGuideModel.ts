
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreGuideModel extends BaseEntity<number> {
  key: string;
  titleFa: string;
  descriptionFa: string;
  bodyFa: string;
  linkFilePodcastIdFa?: number;
  linkFileMovieIdFa?: number;
  linkFilePodcastIdFaSrc: string;
  linkFileMovieIdFaSrc: string;

  titleEn: string;
  descriptionEn: string;
  bodyEn: string;
  linkFilePodcastIdEn?: number;
  linkFileMovieIdEn?: number;
  linkFilePodcastIdEnSrc: string;
  linkFileMovieIdEnSrc: string;


  titleAr: string;
  descriptionAr: string;
  bodyAr: string;
  linkFilePodcastIdAr?: number;
  linkFileMovieIdAr?: number;
  linkFilePodcastIdArSrc: string;
  linkFileMovieIdArSrc: string;

  titleDe: string;
  descriptionDe: string;
  bodyDe: string;
  linkFilePodcastIdDe?: number;
  linkFileMovieIdDe?: number;
  linkFilePodcastIdDeSrc: string;
  linkFileMovieIdDeSrc: string;

  linkFileIds: string;
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Parent: CoreGuideModel;
  parent: CoreGuideModel;
  children: CoreGuideModel[];
}

