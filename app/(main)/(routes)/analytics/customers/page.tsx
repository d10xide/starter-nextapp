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

const CustomerAnalyticPage = async () => {
  const lastDateNumber = parseInt(moment().endOf("month").format("DD"));
  const currMonth = moment().format("MMMM YYYY");
  const currYear = moment().format("YYYY");

  // let query = `SELECT b.title AS label, IFNULL(COUNT(a.id), 0) AS value FROM customertype b LEFT JOIN customer a ON b.id = a.customerTypeId GROUP BY b.title
  // UNION
  // SELECT 'follow up' AS label, COUNT(l.id) AS value FROM lead l left join customer c ON c.id = l.customerId LEFT JOIN customertype b ON b.id = c.customerTypeId WHERE l.status = 'NEW' 
  // UNION	
  // SELECT 'offering' AS label, COUNT(l.id) AS value FROM prospect l left join customer c ON c.id = l.customerId LEFT JOIN customertype b ON b.id = c.customerTypeId WHERE l.status = 'OFFERED' 
  // UNION	
  // SELECT 'new customers' AS label, COUNT(c.id) AS value FROM customer c LEFT JOIN customertype t ON t.id = c.customerTypeId WHERE t.title = 'customer' AND DATE_FORMAT(c.updatedAt, '%Y%M') = DATE_FORMAT(CURDATE(), '%Y%M')`;

  // let datas: DataType[] = await db.$queryRawUnsafe(query);

  // const customerDatas: any[] = datas.map((item) => ({
  //   value: parseInt(item.value.toString()),
  //   label: item.label,
  // }));

  return (
    <div className="p-6">
      <div className="flex flex-col w-full">
        <h1 className="text-muted-foreground mb-4">Customer Analysis</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* {customerDatas &&
            customerDatas.map((item) => (
              <DataCard
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))} */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">{currMonth} best customer</h1>
            {/* <Chart data={revenueByCustomer} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Alltime best customer</h1>
            {/* <Chart data={revenueByCustomer} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Profitable customers</h1>
            {/* <Chart data={revenueByCustomer} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Most active customers</h1>
            {/* <PieChartPage data={revenueByProduct} /> */}
          </div>
          <div className="border rounded-md p-4">
            <h1 className="text-sm font-bold mb-4">Idle Customers</h1>
            {/* <PiePriceChartPage data={revenueBySource} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerAnalyticPage;
