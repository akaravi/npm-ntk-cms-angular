import { HyperShopOrderModel } from './hyperShopOrderModel';
//@@tag-Version-2201011
/**
 * مدل محتوای سفارش هایپر شاپ
 */
export class HyperShopOrderContentModel {

    /** لینک به شناسه سفارش */
    linkOrderId: number;
    /** سفارش */
    order: HyperShopOrderModel;
    /** کد */
    code: string;
    /** نام */
    name: string;
    /** یادداشت */
    memo: string;
    /** قیمت */
    price: number;
    /** تعداد */
    count: number;

}
