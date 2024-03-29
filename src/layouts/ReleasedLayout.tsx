import React from "react";
import { NavBar,TopBar } from "@/components/partials";
// import Dialogs from "@/components/general-ui/dialog";
import ReleasedDashboard from "@/components/dashboard/ui/releasedDashboard";

export default function ReleasedTableLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen" >
      <div className="flex">
      <NavBar />
      <div className="w-screen">
      
      <TopBar />
      <div className="bg-gray-background container h-full">
        {children}
        <ReleasedDashboard/>
        </div>
      </div>
      </div>
    </main> 
  );
}
