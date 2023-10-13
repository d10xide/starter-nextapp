import Chart from "../_components/chart";
import { db } from "@/lib/db";
import moment from "moment";
import TinyChart from "../_components/tiny-chart";

export const dynamic = 'force-dynamic'
export const revalidate = 0

type DataType = {
  title: string;
  type: string;
  value: number;
};

const CostAnalyticPage = async () => {
  const lastDateNumber = parseInt(moment().endOf("month").format("DD"));
  const currMonth = moment().format("MMMM YYYY");
  const currYear = moment().format("YYYY");
  // let query = `SELECT c.title as title, c.type, IFNULL(v.total, 0) AS value FROM cashvariant c 
  // LEFT JOIN (SELECT cashVariantId, IFNULL(SUM(amount), 0) AS total FROM cash GROUP BY cashVariantId) v ON v.cashVariantId = c.id
  // WHERE c.cashType = 'COST' ORDER BY total DESC`;

  // let datas: DataType[] = await db.$queryRawUnsafe(query);

  // const marketingData: any[] = datas
  //   .filter((f) => f.type === "MARKETING")
  //   .map((item) => ({
  //     name: item.title,
  //     total: parseInt(item.value.toString()),
  //   }));

  // const operationalData: any[] = datas
  //   .filter((f) => f.type === "OPERATIONAL")
  //   .map((item) => ({
  //     name: item.title,
  //     total: parseInt(item.value.toString()),
  //   }));


  // let newQuery = "";
  // for (let index = 0; index < lastDateNumber; index++) {
  //   const t = String(index + 1).padStart(2, "0");
  //   const d = moment().format(`YYYY-MM-${t}`);
  //   const str = `SELECT '${t}' as name, IFNULL(SUM(amount), 0) AS value FROM cash WHERE cashType = 'COST' AND DATE(date) = '${d}'`;
  //   if (!newQuery) {
  //     newQuery = str;
  //   } else {
  //     newQuery += `UNION ${str}`;
  //   }
  // }

  // const costPerMonth: {
  //   name: string;
  //   value: number;
  // }[] = await db.$queryRawUnsafe(newQuery);

  // const costPerMonthData: any[] = costPerMonth.map((item) => ({
  //   name: item.name,
  //   total: parseInt(item.value.toString()),
  // }));

  // newQuery = "";
  // for (let index = 0; index < 12; index++) {
  //   const t = String(index + 1).padStart(2, "0");
  //   const d = moment().format(`YYYY-${t}`);
  //   const str = `SELECT '${t}' AS name, (SELECT IFNULL(SUM(amount), 0) AS value FROM view_cashflow WHERE reference = 'cost' AND DATE_FORMAT(date, '%Y-%m') = '${d}') AS value`;
  //   if (!newQuery) {
  //     newQuery = str;
  //   } else {
  //     newQuery += ` UNION ${str}`;
  //   }
  // }
  // const costInMonth: {
  //   name: string;
  //   value: number;
  // }[] = await db.$queryRawUnsafe(newQuery);

  // const costInMonthData: any[] = costInMonth.map((item) => ({
  //   name: item.name,
  //   total: parseInt(item.value.toString()),
  // }));

  return (
    <div className="p-6">
      <div className="flex flex-col w-full">
        <h1 className="text-muted-foreground mb-4">Costs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mb-4">
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Marketing Costs</h1>
            {/* <Chart data={marketingData} /> */}
          </div>
          <div className="border rounded-md p-4">
            {/* <h1 className="text-sm font-bold mb-4">Operational Costs</h1> */}
            {/* <Chart data={operationalData} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Marketing VS Revenue</h1>
            {/* <SimpleChart data={marketingVsRevenueData} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">
              Cost by Date of {currMonth}
            </h1>
            {/* <TinyChart data={costPerMonthData} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">
              Cost by Month of {currYear}
            </h1>
            {/* <TinyChart data={costInMonthData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostAnalyticPage;
