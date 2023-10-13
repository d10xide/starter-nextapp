import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./_components/columns";
import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";
import { List } from "lucide-react";
import { createLog } from "@/actions/create-log";

const UsersPage = async () => {
  const data = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  createLog({
    title: "[GET] users",
    message: "Show users",
    reference: "users",
  });

  return (
    <div className="p-6">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <IconBadge icon={List} size="sm" />
          <h1 className="text-xl font-bold">Users</h1>
        </div>
        <Link href="/users/create">
          <Button>Create</Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
