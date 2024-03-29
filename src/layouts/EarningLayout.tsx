import React from "react";
import { NavBar,TopBar } from "@/components/partials";
// import Dialogs from "@/components/general-ui/dialog";
import EarningDashboard from "@/components/dashboard/ui/EarningDashboard";

export default function EarningLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen" >
      <div className="flex">
      <NavBar />
      <div className="w-screen">
      
      <TopBar />
      <div className="bg-gray-background container h-full">
        {children}
        <EarningDashboard/>
        </div>
      </div>
      </div>
    </main> 
  );
}
