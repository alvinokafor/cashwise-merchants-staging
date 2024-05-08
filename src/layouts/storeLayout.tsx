import React from "react";
import { NavBar,TopBar } from "@/components/partials";
// import Dialogs from "@/components/general-ui/dialog";
import StoreDashboard from "@/components/dashboard/ui/storeProduct";

export default function StoreTableLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen" >
      <div className="flex">
      <NavBar />
      <div className="w-screen">
      
      <TopBar />
      <div className="bg-gray-background container h-full">
        {children}
        <StoreDashboard/>
        </div>
      </div>
      </div>
    </main> 
  );
}
