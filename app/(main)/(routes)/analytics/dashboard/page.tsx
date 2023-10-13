import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { format, formatDistance } from "date-fns";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { DataCard } from "../_components/data-card";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const DashboardAnalyticPage = async () => {
  return <div className="p-6"></div>;
};

export default DashboardAnalyticPage;
