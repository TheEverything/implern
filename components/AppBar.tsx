"use client";

import { Compass, LayoutDashboard, User } from "lucide-react";
import { cn } from "@/lib/utils";
import AppBarItem from "./AppBarItem";

interface Props {
  className: string;
}

function AppBar({ className }: Props) {
  return (
    <div className={cn("flex h-fit flex-col justify-center items-center bg-white shadow-standart", className)}>
      <div className="flex h-fit w-full max-w-[400px] flex-row justify-center items-center ">
        <AppBarItem className="w-full h-[81px]" icon={LayoutDashboard} name="Dashboard" href="dashboard" />
        <AppBarItem className="w-full h-[81px]" icon={Compass} name="Discover" href="discover" />
        <AppBarItem className="w-full h-[81px]" icon={User} name="Profile" href="" />
      </div>
    </div>
  );
}
export default AppBar;
