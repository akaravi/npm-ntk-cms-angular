import { FilterModel } from "../../entity/base/filterModel";

export class EstatePropertySerachDtoModel extends FilterModel {
    linkPropertyTypeLanduseId: string;
    linkPropertyTypeUsageId: string;
    linkContractTypeId: string;
    createdYaer?: number;
    partition?: number;
    area?: number;
    salePriceMin?: number;
    salePriceMax?: number;
    rentPriceMin?: number;
    rentPriceMax?: number;
    depositPriceMin?: number;
    depositPriceMax?: number;
    periodPriceMin?: number;
    periodPriceMax?: number;
    linkLocationIds: number[];
    linkCoreCurrencyId: number;

}