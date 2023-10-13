import { db } from "./db";

const groupByProductStock = (stockIn: any[], stockOut: any[]) => {
  const grouped: { [productId: string]: number } = {};
  const groupedPrice: { [productId: string]: number } = {};
  const groupedCounter: { [productId: string]: number } = {};
  const groupedAvg: { [productId: string]: number } = {};

  stockIn.forEach((item, i) => {
    const productId = item.productId;
    if (!grouped[productId]) {
      grouped[productId] = 0;
      groupedPrice[productId] = 0;
      groupedCounter[productId] = 0;
      groupedAvg[productId] = 0;
    }
    grouped[productId] += parseInt(item.qty.toString());
    groupedPrice[productId] += parseInt(item.price.toString());
    groupedCounter[productId] += 1;
    groupedAvg[productId] = groupedPrice[productId] / groupedCounter[productId];
  });

  stockOut.forEach((item) => {
    const productId = item.productId;
    if (!grouped[productId]) {
      grouped[productId] = 0;
    }
    grouped[productId] -= parseInt(item.qty.toString());
  });

  return { grouped, groupedAvg };
};

export default async function getProductStock() {
  // try {
  //   const products = await db.product.findMany({
  //     orderBy: {
  //       title: "asc",
  //     },
  //   });

  //   const dataStockIn = await db.warehouse.findMany({
  //     where: {
  //       NOT: {
  //         receiveId: null,
  //       },
  //       AND: {
  //         receive: {
  //           isApproved: true,
  //         },
  //       },
  //     },
  //   });

  //   const dataStockOut = await db.warehouse.findMany({
  //     where: {
  //       NOT: {
  //         deliveryId: null,
  //       },
  //       AND: {
  //         delivery: {
  //           isApproved: true,
  //           NOT: {
  //             deliveryStatus: "PENDING",
  //           },
  //         },
  //       },
  //     },
  //   });

  //   const groupProduct = groupByProductStock(dataStockIn, dataStockOut);
  //   const stock = Object.entries(groupProduct.grouped).map(
  //     ([productId, total]) => ({
  //       id: productId,
  //       stock: total,
  //     })
  //   );
  //   const cogs = Object.entries(groupProduct.groupedAvg).map(
  //     ([productId, total]) => ({
  //       id: productId,
  //       cogs: total,
  //     })
  //   );

  //   const mergeById = (a1: any, a2: any) =>
  //     a1.map((itm: any) => ({
  //       ...a2.find((item: any) => item.id === itm.id && item),
  //       ...itm,
  //     }));

  //   const result1 = mergeById(products, stock);
  //   const result = mergeById(result1, cogs);

  //   return result;
  // } catch (error: any) {
  //   return null;
  // }
}
