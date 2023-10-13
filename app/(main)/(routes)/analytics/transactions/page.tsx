import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { createLog } from "@/actions/create-log";
import { DataCard } from "../_components/data-card";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const TransactionsPage = async () => {
  // const result: any = await db.$queryRaw(Prisma.sql`SELECT 
  // (SELECT IFNULL(SUM(amount),0) FROM cash WHERE cashType = 'REVENUE' AND isPosted is TRUE) AS totalOtherRevenue,
  // (SELECT IFNULL(SUM(amount),0) FROM cash WHERE cashType = 'COST' AND isPosted is TRUE) AS totalCost,
  // (SELECT IFNULL(SUM(qty*price),0) FROM salesdetail) AS totalSales,
  // (SELECT IFNULL(SUM(amount),0) FROM payment) AS totalRevenue,
  // ((SELECT IFNULL(SUM(qty*price),0) FROM salesdetail) -
  // (SELECT IFNULL(SUM(amount),0) FROM payment WHERE isPosted IS TRUE)) AS totalAccountReceivable,
  // ((SELECT IFNULL(SUM(qty*price),0) FROM purchasedetail d) -
  // (SELECT IFNULL(SUM(amount),0) FROM purchasepayment WHERE isPosted IS TRUE)) AS totalAccountPayable,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE status = 'NEW') AS salesNew,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE status = 'ONPROGRESS') AS salesOnProgress,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE status = 'CLOSED') AS salesClosed,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE status = 'CANCEL') AS salesCancel,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE status = 'DRAFT') AS salesDraft,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE STATUS <> 'PENDING' OR STATUS <> 'CANCEL') AS sales,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE paymentStatus = 'PENDING') AS paymentPending,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE paymentStatus = 'PAID') AS paymentPaid,
  // (SELECT IFNULL(COUNT(id),0) FROM sales WHERE paymentStatus = 'SETTLED') AS paymentSettled,
  // (SELECT IFNULL(SUM(stock * cogs),0) FROM view_product_stock) AS totalAsset,
  //   (
  //     (SELECT IFNULL(SUM(amount),0) FROM payment where isPosted IS TRUE) -
  //   (SELECT IFNULL(SUM(amount),0) FROM purchasepayment where isPosted IS TRUE) +
  //   (SELECT IFNULL(SUM(amount),0) FROM cash WHERE cashType = 'REVENUE' AND isPosted is TRUE) -
  // (SELECT IFNULL(SUM(amount),0) FROM cash WHERE cashType = 'COST' AND isPosted is TRUE)
  //   ) AS finance,
  //   (SELECT IFNULL(SUM(d.qty*(d.price-d.cogs)),0) FROM salesdetail d LEFT JOIN sales s ON s.id = d.salesId
  //   WHERE s.status = 'CLOSED') AS profit,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE status = 'CANCEL') AS purchaseCancel,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE status = 'DRAFT') AS purchaseDraft,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE status = 'NEW') AS purchaseNew,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE status = 'RECEIVED') AS purchaseReceived,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE status = 'CLOSED') AS purchaseClosed,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE STATUS <> 'PENDING' OR STATUS <> 'CANCEL') AS purchase,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE paymentStatus = 'PENDING') AS purchasePaymentPending,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE paymentStatus = 'PAID') AS purchasePaymentPaid,
  //   (SELECT IFNULL(COUNT(id),0) FROM purchase WHERE paymentStatus = 'SETTLED') AS purchasePaymentSettled  
  //   `);

  createLog({
    title: "[GET] Transactions",
    message: "Show transaction analytics",
    reference: "transactions",
  });

  return (
    <div className="p-6">
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <DataCard
            label="Sales"
            value={0}
            shouldFormat
          />
          <DataCard
            label="Revenue"
            value={0}
            shouldFormat
          />
          <DataCard
            label="Account Receivable"
            value={0}
            shouldFormat
          />
          <DataCard
            label="Account Payable"
            value={0}
            shouldFormat
            color="danger"
          />
          <DataCard
            label="Total Asset"
            value={0}
            shouldFormat
          />
          <DataCard label="Profit" value={0} shouldFormat />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <DataCard
            label="Cashflow"
            value={0}
            shouldFormat
          />
          <DataCard
            color="success"
            label="Other Revenue"
            value={0}
            shouldFormat
          />
          <DataCard
            color="danger"
            label="Cost"
            value={0}
            shouldFormat
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <h1 className="text-sm font-bold">Sales</h1>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
            <DataCard
              label="Transactions"
              value={0}
              variant="sm"
            />
            <DataCard label="New" value={0} variant="sm" />
            <DataCard
              label="On Progress"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Closed"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Paid"
              color="alert"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Settled"
              color="success"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Pending"
              color="warning"
              value={0}
              variant="sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <h1 className="text-sm font-bold">Purchases</h1>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mb-4">
            <DataCard
              label="Transactions"
              value={0}
              variant="sm"
            />
            <DataCard
              label="New"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Received"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Closed"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Paid"
              color="alert"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Settled"
              color="success"
              value={0}
              variant="sm"
            />
            <DataCard
              label="Pending"
              color="warning"
              value={0}
              variant="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
