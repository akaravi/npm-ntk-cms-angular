
import {  CoreSiteModel, CoreUserModel } from "../core-main/_export";
import { TokenAccessModel } from "./tokenAccessModel";
import { TokenDeviceModel } from "./tokenDeviceModel";

export class TokenInfoModelV3 {
    access: TokenAccessModel;
    device: TokenDeviceModel;
    user: CoreUserModel;
    site: CoreSiteModel;
}
