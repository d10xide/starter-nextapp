import { db } from "@/lib/db";
import PieChartPage from "../_components/pie";
import TinyChart from "../_components/tiny-chart";
import moment from "moment";
import PiePriceChartPage from "../_components/pie price";
import Chart from "../_components/chart";
import { DataCard } from "../_components/data-card";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type DataType = {
  label: string;
  value: number;
};

const ProductAnalyticPage = async () => {
  const lastDateNumber = parseInt(moment().endOf("month").format("DD"));
  const currMonth = moment().format("MMMM YYYY");
  const currYear = moment().format("YYYY");

  // let query = `SELECT 'published' AS label, (SELECT IFNULL(COUNT(p.id),0) FROM product p WHERE p.isPublished IS TRUE) AS value 
  // UNION
  // SELECT 'draft' AS label, (SELECT IFNULL(COUNT(p.id),0) FROM product p WHERE p.isPublished IS FALSE) AS value 
  // UNION
  // SELECT 'discontinued' AS label, (SELECT IFNULL(COUNT(p.id),0) FROM product p WHERE p.discontinued IS TRUE) AS value 
  // `;

  // let datas: DataType[] = await db.$queryRawUnsafe(query);

  // const productDatas: any[] = datas.map((item) => ({
  //   value: parseInt(item.value.toString()),
  //   label: item.label,
  // }));

  return (
    <div className="p-6">
      <div className="flex flex-col w-full">
        <h1 className="text-muted-foreground mb-4">Product Analysis</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* {productDatas &&
            productDatas.map((item) => (
              <DataCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))} */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Best Selling Products</h1>
            {/* <PieChartPage data={revenueByProduct} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Profitable Products</h1>
            {/* <Chart data={revenueByCustomer} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Promoted Products</h1>
            {/* <PieChartPage data={revenueByProductTypes} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Product With Ads</h1>
            {/* <TinyChart data={revenuePerMonthData} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Product With Minimum Qty</h1>
            {/* <PiePriceChartPage data={revenueBySource} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Returned Product Rates</h1>
            {/* <TinyChart data={revenueInMonthData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalyticPage;
