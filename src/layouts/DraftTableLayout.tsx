import React from "react";
import { NavBar,TopBar } from "@/components/partials";
// import Dialogs from "@/components/general-ui/dialog";
import DraftDashboard from "@/components/dashboard/ui/draftDasboard";

export default function DraftTableLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" min-h-screen" >
      <div className="flex">
      <NavBar />
      <div className="w-screen">
      
      <TopBar />
      <div className="bg-gray-background container h-full">
        {children}
        <DraftDashboard/>
        </div>
      </div>
      </div>
    </main> 
  );
}
