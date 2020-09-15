import { MoneyType } from "./common";
import { DiscountTypes } from "./discount";
import { NAME } from "./product"

export const STATUS = "STATUS";
export const TYPE = "TYPE";
export const DATE = "DiscountID";
export const SHOP = "SHOP";
export const SALES_CHANNEL = "SALES_CHANNEL";

export type PromotionDateType = {
  from: string;
  to: string;
};

export type PromotionCategoryType = {
  ID: string;
  category: string;
  slug: string;
  products: Array<any>;
};

export type CustomPromotionListType = Pick<
  PromotionType,
  "promotionID" | "promotionTitle" | "promotionType"
> & {
  channels: string;
  date: string;
};

// PROMOTIONS SCHEMA-BASED TYPINGS
// Below typings may change to fit the GraphQL schema
export type PromotionListType = Pick<
  PromotionType,
  "startDate" | "endDate" | "channelIDs"
> & {
  ID: string;
  name: string;
  type: PromotionTypes;
};

export type PromotionType = {
  promotionID: string;
  promotionTitle: string;
  promotionType: PromotionTypes;
  channelIDs: Array<string>;
  startDate: number;
  endDate: number;
  moneyValue: MoneyType;
  scalarValue: number;
  isActive: boolean;
  discountType?: DiscountTypes;
};

export enum PromotionTypes {
  DISCOUNT = "DISCOUNT",
  BUNDLE = "BUNDLE",
  COUPON = "COUPON",
}
// convert voucher types to Bahasa
const DISCOUNT_TYPE: { [key: string]: string } = {};
DISCOUNT_TYPE[DiscountTypes.PERCENTAGE] = "Presentase (%)";
DISCOUNT_TYPE[DiscountTypes.FIXED] = "Fixed";
DISCOUNT_TYPE[DiscountTypes.ABSOLUTE] = "Absolute";
