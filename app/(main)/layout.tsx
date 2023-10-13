import getCurrentUser from "@/lib/get-current-user";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser()

  if(!user) {
    redirect("/login")
  }
  
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
      <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className="md:pl-56 pt-[80px] h-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
