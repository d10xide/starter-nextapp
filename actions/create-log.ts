import { db } from "@/lib/db";

interface LogProps {
  title: string;
  message: string;
  referenceId?: any;
  reference?: string;
  data?: string;
  userId?: string;
}

export async function createLog({
  title,
  message,
  referenceId = "",
  reference = "",
  data = "",
  userId = "DUMMY_ID",
}: LogProps) {
  await db.log.create({
    data: {
      title,
      message,
      referenceId,
      reference,
      data,
      userId
    },
  });
}
