import { db } from "@/lib/db";
import PieChartPage from "../_components/pie";
import TinyChart from "../_components/tiny-chart";
import moment from "moment";
import PiePriceChartPage from "../_components/pie price";
import Chart from "../_components/chart";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type DataType = {
  title: string;
  value: number;
};

const RevenueAnalyticPage = async () => {
  const lastDateNumber = parseInt(moment().endOf("month").format("DD"));
  const currMonth = moment().format("MMMM YYYY");
  const currYear = moment().format("YYYY");
  // let query = `SELECT x.title, IFNULL(v.value, 0) AS value FROM source x LEFT JOIN 
  // (SELECT s.sourceId, SUM(d.total) AS value FROM sales s LEFT JOIN (SELECT salesId, SUM(qty*price) AS total FROM salesdetail GROUP BY salesId) d ON d.salesId = s.id GROUP BY s.sourceId) v ON v.sourceId = x.id WHERE IFNULL(v.value, 0) > 0 ORDER BY v.value DESC LIMIT 5`;

  // let datas: DataType[] = await db.$queryRawUnsafe(query);

  // const revenueBySource: any[] = datas.map((item) => ({
  //   value: parseInt(item.value.toString()),
  //   title: item.title,
  // }));

  // query = `SELECT x.title, IFNULL(v.value, 0) AS value FROM product x
  //  LEFT JOIN (SELECT productId, SUM(qty) AS value FROM salesdetail GROUP BY productId) v ON v.productId = x.id
  //  WHERE value > 0 ORDER BY value DESC LIMIT 5`;

  // datas = await db.$queryRawUnsafe(query);

  // const revenueByProduct: any[] = datas.map((item) => ({
  //   value: parseInt(item.value.toString()),
  //   title: item.title,
  // }));

  // query = `SELECT x.title, IFNULL(v.value, 0) AS value FROM productType x
  //  LEFT JOIN (SELECT p.productTypeId, SUM(d.qty) AS value FROM salesdetail d LEFT JOIN product p ON p.id = d.productId GROUP BY p.productTypeId) v ON v.productTypeId = x.id
  //  WHERE value > 0 ORDER BY value DESC LIMIT 5`;

  // datas = await db.$queryRawUnsafe(query);

  // const revenueByProductTypes: any[] = datas.map((item) => ({
  //   value: parseInt(item.value.toString()),
  //   title: item.title,
  // }));

  // query = `SELECT x.name as title, IFNULL(v.value, 0) AS value FROM customer x
  // LEFT JOIN (SELECT p.customerId, SUM(d.qty*price) AS value FROM salesdetail d LEFT JOIN sales p ON p.id = d.salesId GROUP BY p.customerId) v ON v.customerId = x.id
  // WHERE value > 0 LIMIT 10`;

  // datas = await db.$queryRawUnsafe(query);

  // const revenueByCustomer: any[] = datas.map((item) => ({
  //   total: parseInt(item.value.toString()),
  //   name: item.title,
  // }));


  // let newQuery = "";
  // for (let index = 0; index < lastDateNumber; index++) {
  //   const t = String(index + 1).padStart(2, "0");
  //   const d = moment().format(`YYYY-MM-${t}`);
  //   const str = `SELECT '${t}' as name, IFNULL(SUM(amount), 0) AS value FROM view_cashflow WHERE (reference = 'sales' OR reference = 'revenue') AND DATE(date) = '${d}'`;
  //   if (!newQuery) {
  //     newQuery = str;
  //   } else {
  //     newQuery += `UNION ${str}`;
  //   }
  // }

  // const revenuePerMonth: {
  //   name: string;
  //   value: number;
  // }[] = await db.$queryRawUnsafe(newQuery);

  // const revenuePerMonthData: any[] = revenuePerMonth.map((item) => ({
  //   name: item.name,
  //   total: parseInt(item.value.toString()),
  // }));

  // newQuery = "";
  // for (let index = 0; index < 12; index++) {
  //   const t = String(index + 1).padStart(2, "0");
  //   const d = moment().format(`YYYY-${t}`);
  //   const str = `SELECT '${t}' AS name, (SELECT IFNULL(SUM(amount), 0) AS value FROM view_cashflow WHERE (reference = 'sales' OR reference = 'revenue') AND DATE_FORMAT(date, '%Y-%m') = '${d}') AS value`;
  //   if (!newQuery) {
  //     newQuery = str;
  //   } else {
  //     newQuery += ` UNION ${str}`;
  //   }
  // }
  // const revenueInMonth: {
  //   name: string;
  //   value: number;
  // }[] = await db.$queryRawUnsafe(newQuery);

  // const revenueInMonthData: any[] = revenueInMonth.map((item) => ({
  //   name: item.name,
  //   total: parseInt(item.value.toString()),
  // }));

  return (
    <div className="p-6">
      <div className="flex flex-col w-full">
        <h1 className="text-muted-foreground mb-4">Revenues</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border rounded-md">
            <h1 className="text-sm font-bold p-4 mb-4">Revenue by Sources</h1>
            {/* <PiePriceChartPage data={} /> */}
          </div>
          <div className="border rounded-md">
            <h1 className="text-sm font-bold p-4 mb-4">Revenue by Products</h1>
            {/* <PieChartPage data={} /> */}
          </div>
          <div className="border rounded-md">
            <h1 className="text-sm font-bold p-4 mb-4">Revenue by Product Types</h1>
            {/* <PieChartPage data={} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Revenue by Customers</h1>
            {/* <Chart data={} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">
              Revenue by Date of {currMonth}
            </h1>
            {/* <TinyChart data={} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">
              Revenue by Month of {currYear}
            </h1>
            {/* <TinyChart data={} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueAnalyticPage;
