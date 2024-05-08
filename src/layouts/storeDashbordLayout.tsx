import React from "react";
import { NavBar,TopBar } from "@/components/partials";
// import Dialogs from "@/components/general-ui/dialog";
import StoreDetails from "@/components/dashboard/ui/storeDetails";

export default function StoreDashLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen" >
      <div className="flex">
      <NavBar />
      <div className="w-screen">
      
      <TopBar />
      <div className="bg-gray-background container h-full">
        {children}
        <StoreDetails/>
        </div>
      </div>
      </div>
    </main> 
  );
}
