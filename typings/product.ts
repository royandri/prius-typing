import {
    SUCCESS,
    SYNC,
    FAILED,
    UNPUBLISH,
    CM,
    M,
    INCH,
    GR,
    KG,
  } from "./constants";
  import { BrandType, MoneyType } from "./common";
  import { PromotionType } from "./promotion";
  import { DiscountTypes } from "./discount";
  
  // UPLOAD TYPES
  export const ADD_PRODUCT: string = "UPSERT_PRODUCT";
  export const EDIT_PRODUCT: string = "UPSERT_PRODUCT";
  export const UPLOAD_PAYMENT_CONFIRMATION: string = "PAYMENT_CONFIRMATION";
  
  export const NAME = "NAME";
  export const STORE = "STORE";
  export const STOCK = "STOCK";
  
  // PRODUCT SCHEMA-BASED
  export type ProductType = {
    ID: string;
    brandID: string;
    brand: ProductBrandType;
    slug: string;
    published: boolean;
    imageUrls: Array<string>;
    details: Array<ProductDetailType>;
    conditions: string;
    volume: ProductVolumeType;
    weight: ProductWeightType;
    seos: Array<ProductSEOType>;
    attributes: Array<ProductAttributeType>;
    channelAttributes: Array<ProductChannelAttributeType>;
    relatedProductIds: Array<string>;
    relatedProduct: Array<ProductType>;
    tagKeys: Array<string>;
    collectionIds: Array<string>;
    stocks: Array<ProductStockType>;
    variants: Array<GetProductVariantType>;
    site: SiteType;
    syncStatus: SycnStatusTypes;
    channels: Array<SalesType>;
    promotions: Array<PromotionType>;
  };
  
  export type ProductBrandType = Pick<BrandType, "ID" | "name">;
  
  export type ProductDetailType = {
    name: string;
    description: string;
    language: string;
  };
  
  export type ProductVolumeType = {
    length: number;
    height: number;
    width: number;
    unit: LengthUnitTypes;
  };
  
  export type LengthUnitTypes = typeof CM | typeof M | typeof INCH;
  
  export type ProductWeightType = {
    value: number;
    unit: WeightUnitTypes;
  };
  
  export type WeightUnitTypes = typeof GR | typeof KG;
  
  export type ProductSEOType = {
    title: string;
    description: string;
    keywords: Array<string>;
    language: string;
  };
  
  export type ProductAttributeType = {
    sortIndex: number;
    translations: Array<ProductAttributeTranslationType>;
  };
  
  export type ProductAttributeTranslationType = {
    key: string;
    value: string;
    language: string;
  };
  
  export type ProductChannelAttributeType = {
    channelId: string;
    key: string;
    value: string;
  };
  
  export type ProductStockType = {
    sku: string;
    channelId: string;
    stock: number;
  };
  
  export type DiscountRowType = {
    moneyValue: MoneyType;
    discountType: DiscountTypes;
    scalarValue: number;
  };
  
  export type DiscountSpecType = {
    startDate: number;
    endDate: number;
    rows: Array<DiscountRowType>;
    referenceType: string;
    isActive: boolean;
  };
  
  export type DiscountItemType = {
    channelIDs: Array<string>;
    title: string;
    discountID: string;
    discountSpec: DiscountSpecType;
  };
  
  export type PagedDiscountType = {
    items: Array<DiscountItemType>;
  };
  
  export type GetProductVariantType = {
    channelIDs: Array<string>;
    basePrices: Array<MoneyType>;
    attributes: Array<VariantAttributeType>;
    channelAttributes: Array<VariantChannelAttributeType>;
    imageUrls: Array<string>;
    SKU: string;
    details: Array<VariantDetailType>;
    stocks: StocksInfoType;
    discounts: PagedDiscountType;
  };
  
  export type VariantAttributeType = {
    sortIndex: number;
    translations: Array<VariantAttributeTranslationType>;
  };
  
  export type VariantAttributeTranslationType = {
    key: string;
    value: string;
    language: string;
  };
  
  export type VariantChannelAttributeType = {
    channelId: string;
    key: string;
    value: string;
  };
  
  export type VariantDetailType = {
    name: string;
    language: string;
  };
  
  export type StocksInfoType = {
    stocks: Array<StockType>;
    total: number;
  };
  
  export type StockType = {
    SKU: string;
    quantity: number;
  };
  
  export type SiteType = {
    id: string;
    host: string;
    fqdn?: string;
    template: string;
    language: string;
    currencyCode: string;
    name: string;
  };
  
  export type SycnStatusTypes =
    | typeof SUCCESS
    | typeof SYNC
    | typeof FAILED
    | typeof UNPUBLISH;
  
  export type SalesType = {
    channelId: string;
    syncStatus: SycnStatusTypes;
    variants: Array<GetProductVariantType>;
  };
  // END OF PRODUCT SCHEMA-BASED
  
  // CUSTOM TYPINGS
  export type CustomProductPerVariantType = Pick<
    GetProductVariantType,
    "SKU" | "basePrices"
  > &
    Pick<VariantDetailType, "name"> & {
      ID?: string;
      salesChannelName: Array<string>;
      brandName: string;
      stocks: number;
      buffer: number;
      promotion?: Array<PromotionType>;
    };
  // END OF CUSTOM TYPINGS
  
  /**
   * @deprecated
   */
  export type ProductPerChannelType = Pick<
    ProductType,
    "ID" | "syncStatus" | "brandID"
  > &
    Pick<SalesType, "variants"> & {
      channelName: string;
      image: string;
      price: string;
      productName: string;
      promo: string;
      stock: number;
      buffer: number;
    };
  
  export type FetchPolicyType =
    | "cache-and-network"
    | "cache-first"
    | "network-only"
    | "cache-only"
    | "no-cache"
    | "standby";
  
  //Sales Channel Dialog
  export type SalesChannelDialogType = {
    sku: string;
    mainVariant: string;
    stocks: number;
    buffer: number;
    isSyncActive: boolean;
    salesChannelData: Array<SalesChannelInfoType>;
  };
  
  export type SalesChannelInfoType = {
    ID?: string;
    productStatus: SycnStatusTypes;
    salesChannelName: string;
    brandName: string;
    variant: string;
    promotion: Array<PromotionType>;
    stock: number;
    price: MoneyType;
  };
  