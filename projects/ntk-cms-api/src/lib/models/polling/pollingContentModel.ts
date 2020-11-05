import { BaseModuleEntity } from '../base/baseModuleEntity';

export class PollingContentModel   extends BaseModuleEntity<number> {

    Source: string;

    expireDate?: string;
    viewStatisticsBeforeVote: boolean;
    viewStatisticsAfterVote: boolean;
    virtual_Category: PollingCategoryModel;
    category: PollingCategoryModel;
    body: string;
    description: string;
    fromDate?: string;
    geolocationlatitude?: number;
    geolocationlongitude?: number;
    keyword: string;
    linkCategoryId?: number;
    linkFileIds: string;
    linkFilePodcastId?: number;
    linkFileMovieId?: number;
    linkMainImageId?: number;
    scoreClick: number;
    scoreSumPercent: number;
    title: string;
    viewCount: number;
    favorited: boolean;
    mainImageSrc: string;
    linkFilePodcastIdSrc: string;
    linkFileMovieIdSrc: string;
    linkFileIdsSrc: string[];
    question: string;
    maxVoteForThisContent: number;
    maxVoteForEachOption: number;
    options: PollingOptionModel[];
}
