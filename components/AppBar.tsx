import { IconContext } from "react-icons";
import { FiBarChart2 } from "react-icons/fi";
import Image from "next/image";
import { Compass, LayoutDashboard, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function AppBar({ className }: Props) {
  return (
    <div className={className}>
      <div className="flex h-fit w-[400px] flex-row justify-center items-center bg-white-500 shadow-xl ">
        <div className="w-full h-[81px] flex flex-col justify-center items-center gap-1.5 ">
          <LayoutDashboard />
          <p>Dashboard</p>
        </div>
        <div className="w-full h-[81px] flex flex-col justify-center items-center gap-1.5 ">
          <Compass />
          <p>Discover</p>
        </div>
        <div className="w-full h-[81px] flex flex-col justify-center items-center gap-1.5 ">
          <User />
          <p>User</p>
        </div>
      </div>
    </div>
  );
}
export default AppBar;
