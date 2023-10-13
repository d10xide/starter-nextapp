import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "./db";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email
      },
    });

    return currentUser;
  } catch (error: any) {
    return null;
  }
}
