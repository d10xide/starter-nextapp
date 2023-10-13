import { DataTable } from "@/components/data-table";
import { columns } from "./_components/columns";
import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";
import { FileClock } from "lucide-react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const EventLogPage = async () => {
  const data = await db.log.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // createLog({
  //   title: "[GET] Logs",
  //   message: "Show event logs",
  //   reference: "logs",
  // });

  return (
    <div className="p-6">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <IconBadge icon={FileClock} size="sm" />
          <h1 className="text-xl font-bold">Event Logs</h1>
        </div>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default EventLogPage;
