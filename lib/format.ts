import { intlFormat } from "date-fns";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat().format(num)
};
