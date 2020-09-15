import { MoneyType, BankAccountType } from "./common";

// order status in DB lang
export const ORDER_ACCEPTED = "ACCEPTED";
export const ORDER_CANCELLED = "CANCELLED";
export const ORDER_DONE = "COMPLETED";
export const ORDER_NEW = "CREATED";
export const ORDER_DELETED = "DELETED";
export const ORDER_READY_TO_SHIP = "READY_TO_SHIP";
export const ORDER_RETURNED = "RETURNED";
export const ORDER_SHIPPED = "SHIPPED";
export const ORDER_STATUS_UPDATED = "STATUS_UPDATED";
export const ORDER_SET_ATTRIBUTE = "SET_ATTRIBUTE";
export const ORDER_SET_BILLING = "SET_BILLING";
export const ORDER_SET_DELIVERY = "SET_DELIVERY";
export const ORDER_SET_LINE_ITEM = "SET_LINE_ITEM";
export const ORDER_SET_PAYMENT = "SET_PAYMENT";
export const ORDER_SET_SHIPPING = "SET_SHIPPING";
export type OrderStatus =
  | typeof ORDER_ACCEPTED
  | typeof ORDER_CANCELLED
  | typeof ORDER_DELETED
  | typeof ORDER_DONE
  | typeof ORDER_NEW
  | typeof ORDER_READY_TO_SHIP
  | typeof ORDER_RETURNED
  | typeof ORDER_SHIPPED
  | typeof ORDER_STATUS_UPDATED;
// order status in FE lang
export const ORDER_DITERIMA = "Diterima";
export const ORDER_DIBATALKAN = "Dibatalkan";
export const ORDER_DIHAPUS = "Dihapus";
export const ORDER_SELESAI = "Selesai";
export const ORDER_BARU = "Pesanan Baru";
export const ORDER_SIAP_KIRIM = "Dikemas";
export const ORDER_DIKIRIM = "Dikirim";
export const ORDER_DIKEMBALIKAN = "Dikembalikan";
export const ORDER_DIPERBARUI = "Status Diperbarui";
export type OrderStatusTranslated =
  | typeof ORDER_DITERIMA
  | typeof ORDER_DIBATALKAN
  | typeof ORDER_DIHAPUS
  | typeof ORDER_SELESAI
  | typeof ORDER_BARU
  | typeof ORDER_SIAP_KIRIM
  | typeof ORDER_DIKIRIM
  | typeof ORDER_DIKEMBALIKAN
  | typeof ORDER_DIPERBARUI;

// order status translated to FE lang
export const STATUS_ORDER: { [key: string]: string } = {};
STATUS_ORDER[ORDER_ACCEPTED] = ORDER_DITERIMA;
STATUS_ORDER[ORDER_CANCELLED] = ORDER_DIBATALKAN;
STATUS_ORDER[ORDER_DELETED] = ORDER_DIHAPUS;
STATUS_ORDER[ORDER_DONE] = ORDER_SELESAI;
STATUS_ORDER[ORDER_NEW] = ORDER_BARU;
STATUS_ORDER[ORDER_READY_TO_SHIP] = ORDER_SIAP_KIRIM;
STATUS_ORDER[ORDER_RETURNED] = ORDER_DIKEMBALIKAN;
STATUS_ORDER[ORDER_SHIPPED] = ORDER_DIKIRIM;
STATUS_ORDER[ORDER_STATUS_UPDATED] = ORDER_DIPERBARUI;
// order status translated to DB lang
export const STATUS_CODE: { [key: string]: string } = {};
STATUS_CODE[ORDER_DITERIMA] = ORDER_ACCEPTED;
STATUS_CODE[ORDER_DIBATALKAN] = ORDER_CANCELLED;
STATUS_CODE[ORDER_DIHAPUS] = ORDER_DELETED;
STATUS_CODE[ORDER_SELESAI] = ORDER_DONE;
STATUS_CODE[ORDER_BARU] = ORDER_NEW;
STATUS_CODE[ORDER_SIAP_KIRIM] = ORDER_READY_TO_SHIP;
STATUS_CODE[ORDER_DIKEMBALIKAN] = ORDER_RETURNED;
STATUS_CODE[ORDER_DIKIRIM] = ORDER_SHIPPED;
STATUS_CODE[ORDER_DIPERBARUI] = ORDER_STATUS_UPDATED;

// order status in numeric
export const STATUS_ORDER_NUM: { [key: string]: number } = {};
STATUS_ORDER_NUM[ORDER_NEW] = 0;
STATUS_ORDER_NUM[ORDER_ACCEPTED] = 1;
STATUS_ORDER_NUM[ORDER_READY_TO_SHIP] = 2;
STATUS_ORDER_NUM[ORDER_SHIPPED] = 3;
STATUS_ORDER_NUM[ORDER_DONE] = 4;
STATUS_ORDER_NUM[ORDER_CANCELLED] = 5;
STATUS_ORDER_NUM[ORDER_RETURNED] = 6;
STATUS_ORDER_NUM[ORDER_DELETED] = 7;
STATUS_ORDER_NUM[ORDER_STATUS_UPDATED] = 8;

// payment methods
export const PAYMENT_BANK_TRANSFER = "BANK TRANSFER";
export const PAYMENT_CREDIT_CARD = "CREDIT CARD";
export const PAYMENT_MIDTRANS_GOPAY = "MIDTRANS GOPAY";
export const PAYMENT_COD = "COD";
export type PaymentMethods =
  | typeof PAYMENT_BANK_TRANSFER
  | typeof PAYMENT_CREDIT_CARD
  | typeof PAYMENT_MIDTRANS_GOPAY
  | typeof PAYMENT_COD;

// payment methods
export const PAYMENT_METHOD: { [key: string]: string } = {};
PAYMENT_METHOD[PAYMENT_BANK_TRANSFER] = "Bank Transfer";
PAYMENT_METHOD[PAYMENT_CREDIT_CARD] = "Credit Card Midtrans";
PAYMENT_METHOD[PAYMENT_MIDTRANS_GOPAY] = "GO-PAY Midtrans";
PAYMENT_METHOD[PAYMENT_COD] = PAYMENT_COD;

// payment status
export const PAYMENT_NOT_PAID = "NOT_PAID";
export const PAYMENT_PAID = "PAID";
export const PAYMENT_REFUND = "REFUND";
export type PaymentStatus =
  | typeof PAYMENT_NOT_PAID
  | typeof PAYMENT_PAID
  | typeof PAYMENT_REFUND;

// shipment methods
export const SHIPMENT_JNE_REG = "JNE_REG";
export const SHIPMENT_SICEPAT_REG = "SICEPAT_REG";
export type ShippingMethods =
  | typeof SHIPMENT_JNE_REG
  | typeof SHIPMENT_SICEPAT_REG;
export const SHIPMENT_METHOD: { [key: string]: string } = {};
SHIPMENT_METHOD[SHIPMENT_JNE_REG] = "JNE Reguler";
SHIPMENT_METHOD[SHIPMENT_SICEPAT_REG] = "Sicepat Reguler";

// order flag
export const STATUS_FLAG: { [key: string]: string } = {};
STATUS_FLAG[PAYMENT_REFUND] = "error";
STATUS_FLAG[PAYMENT_PAID] = "default";
STATUS_FLAG[PAYMENT_NOT_PAID] = "warning";

// active dialog
export const DIALOG_PAYMENT = "PAYMENT";
export const DIALOG_SHIPMENT = "SHIPMENT";
export const DIALOG_DELETE = "DELETE";
export const DIALOG_NONE = "NONE";
export type DialogTypes =
  | typeof DIALOG_PAYMENT
  | typeof DIALOG_SHIPMENT
  | typeof DIALOG_DELETE
  | typeof DIALOG_NONE;

// order action types
export const ACCEPT_ORDER = "ACCEPT_ORDER",
  ADD_PAYMENT_RECEIPT = "ADD_PAYMENT_RECEIPT",
  DECLINE_ORDER = "DECLINE_ORDER",
  FINISH_ORDER = "FINISH_ORDER",
  SET_READY_TO_SHIP = "SET_READY_TO_SHIP",
  SHIP_ORDER = "SHIP_ORDER";
export type OrderActions =
  | typeof ACCEPT_ORDER
  | typeof ADD_PAYMENT_RECEIPT
  | typeof DECLINE_ORDER
  | typeof FINISH_ORDER
  | typeof SET_READY_TO_SHIP
  | typeof SHIP_ORDER;

export type SelectDataType = {
  label: string;
  value: string;
};

// ORDER SCHEMA-BASED TYPINGS
// Below typings may change to fit the GraphQL schema

export type OrderType = {
  ID: string;
  brand: GetBrandType;
  channelID: string;
  brandID: string;
  invoiceID: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  paymentRecords: Array<PaymentRecordsType>;
  memberID: string;
  buyerNote: string;
  billingAddress: BillingAddressType;
  deliveryAddress: DeliveryAddressType;
  lineItems: Array<LineItemType>;
  shipping: ShippingType;
  payment: PaymentType;
  discount: MoneyType;
  totalCost: MoneyType;
};

export type PaymentRecordsType = {
  brandID: string;
  orderID: string;
  provider: string;
  method: string;
  status: string;
  info: Array<PaymentRecordInfoType>;
};

export type PaymentRecordInfoType = {
  amount: string;
  attachment: string;
  orderID: string;
  recipientBankName: string;
  senderEmail: string;
  senderName: string;
  transactionDate: number;
};

export type BillingAddressType = {
  name: string;
  email: string;
  phone: string;
  country: string;
  province: string;
  city: string;
  subDistrict: string;
  street: string;
  postalCode: string;
};

export type DeliveryAddressType = {
  name: string;
  email: string;
  phone: string;
  country: string;
  province: string;
  city: string;
  subDistrict: string;
  street: string;
  postalCode: string;
  districtCode?: string;
  formattedLocation?: string;
};

export type LineItemType = {
  title: string;
  SKU: string;
  quantity: number;
  price: MoneyType;
  imageURL: string;
};

export type ShippingType = {
  provider: string;
  service: string;
  cost: MoneyType;
  AWBNumber: string;
};

export type PaymentType = {
  provider: string;
  service: string;
  fee: MoneyType;
  uniqueCode: number;
};

// TO DO: update as if needed more properties from GraphQL
export type PaymentMethodType = {
  name: string;
  merchantID: string;
};

export type SocialMediaType = {
  twitter?: string;
  facebook?: string;
  instagram?: string;
};

export type ListAddressType = {
  phones: Array<string>;
};

export type WarehouseDetailType = {
  warehouseID: string;
  address: ListAddressType;
};

export type GetWarehouseType = {
  items: Array<WarehouseDetailType>;
};

export type GetTenantType = {
  warehouses: GetWarehouseType;
};

export type BrandSettingType = {
  logoURL: string;
  socialMediaLink: SocialMediaType;
  bankAccount: BankAccountType;
  paymentMethods: PaymentMethodType;
};

export type GetBrandType = {
  ID: string;
  name: string;
  tenant: GetTenantType;
  settings: BrandSettingType;
};
//end TO DO

// END: ORDER SCHEMA-BASED TYPINGS

// CUSTOM TYPINGS
export interface OrderListItemType
  extends Pick<
    OrderType,
    "channelID" | "createdAt" | "ID" | "memberID" | "paymentRecords" | "status"
  > {
  billingName: Pick<BillingAddressType, "name">;
  shippingService: Pick<ShippingType, "service">;
  paymentService: Pick<PaymentType, "service">;
  statusFlag: string;
  statusTranslated: string;
  statusNum: number;
}

export type OrderDetailType = Pick<
  OrderType,
  | "ID"
  | "brand"
  | "channelID"
  | "createdAt"
  | "invoiceID"
  | "lineItems"
  | "payment"
  | "shipping"
  | "discount"
  | "totalCost"
  | "buyerNote"
  | "deliveryAddress"
  | "billingAddress"
  | "paymentRecords"
  | "status"
>;

export const CHANGE_BUYERS_INFO: { [key: string]: string } = {};
CHANGE_BUYERS_INFO["name"] =
  "Apakah Anda yakin untuk mengubah informasi nama penerima?";
CHANGE_BUYERS_INFO["districtCode"] =
  "Apakah Anda yakin untuk mengubah informasi kecamatan/kota penerima?";
CHANGE_BUYERS_INFO["street"] =
  "Apakah Anda yakin untuk mengubah informasi alamat penerima?";
CHANGE_BUYERS_INFO["postalCode"] =
  "Apakah Anda yakin untuk mengubah informasi kode pos penerima?";

//TO DO: align realistic typings
export const ORDER_CREATED = "CREATED";
export const ORDER_UPDATED = "STATUS_UPDATED";
export type OrderHistoryAction =
  | typeof ORDER_ACCEPTED
  | typeof ORDER_CREATED
  | typeof ORDER_DELETED
  | typeof ORDER_CANCELLED
  | typeof ORDER_READY_TO_SHIP
  | typeof ORDER_STATUS_UPDATED
  | typeof ORDER_SET_ATTRIBUTE
  | typeof ORDER_SET_BILLING
  | typeof ORDER_SET_DELIVERY
  | typeof ORDER_SET_LINE_ITEM
  | typeof ORDER_SET_PAYMENT
  | typeof ORDER_SET_SHIPPING;

export type OrderHistoryType = {
  orderID: string;
  createdDate: string;
  actor: string;
  diff: any;
  action: OrderHistoryAction;
  newValue: OrderStatus;
  notes: any;
};
//end TO DO

export const FLAG_SUCCESS = "success";
export const FLAG_FAILED = "failed";
export type FlagTypes = typeof FLAG_SUCCESS | typeof FLAG_FAILED;

export type OrderHistoryProcessedType = {
  date: string;
  description: string;
  errorLog?: string;
  flag: FlagTypes;
  hasAwbNotes?: boolean;
  hasPaymentNotes?: boolean;
  hasReceiverNotes?: boolean;
  time: string;
};

export interface OrderPrintType
  extends Pick<
    OrderType,
    | "ID"
    | "buyerNote"
    | "channelID"
    | "createdAt"
    | "invoiceID"
    | "lineItems"
    | "payment"
    | "shipping"
    | "deliveryAddress"
    | "billingAddress"
    | "totalCost"
    | "discount"
  > {
  brand: GetBrandType;
  subTotal: number;
}

export type OrderHeaderDataType = Pick<
  OrderType,
  "ID" | "invoiceID" | "createdAt" | "lineItems"
>;
