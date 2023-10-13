import { db } from "./db";

export default async function getCashflow() {
  // try {
  //   const payment = await db.payment.findMany({
  //     include: {
  //       sales: true,
  //     },
  //   });

  //   const formattedPayment = payment.map((item) => ({
  //     id: item.id,
  //     reference: "sales",
  //     date: item.createdAt,
  //     orderCode: item.sales.invoice,
  //     amount: item.amount,
  //     isPosted: item.isPosted,
  //   }));

  //   const purchasePayment = await db.purchasePayment.findMany({
  //     include: {
  //       purchase: true,
  //     },
  //   });
  //   const formattedPurchasePayment = purchasePayment.map((item) => ({
  //     id: item.id,
  //     reference: "purchase",
  //     date: item.createdAt,
  //     orderCode: item.purchase.invoice,
  //     amount: item.amount,
  //     isPosted: item.isPosted,
  //   }));

  //   const cash = await db.cash.findMany();
  //   const formattedCash = cash.map((item) => ({
  //     id: item.id,
  //     reference: item.cashType.toLowerCase(),
  //     date: item.date,
  //     orderCode: item.code,
  //     amount: item.amount,
  //     isPosted: item.isPosted,
  //   }));

  //   const result = formattedPayment
  //     .concat(formattedPurchasePayment)
  //     .concat(formattedCash)
  //     .sort();
  //   result.sort((a: any, b: any) => b.date - a.date);

  //   return result;
  // } catch (error: any) {
  //   return null;
  // }
}
