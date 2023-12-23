"use client";

import { Compass, LayoutDashboard, User } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  className: string;
}

function AppBar({ className }: Props) {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="flex h-fit gap-1.5 flex-col justify-center items-center bg-white shadow-standart ">
        <div className="flex h-fit w-[400px] flex-row justify-center items-center ">
          <div className="w-full h-[81px] flex flex-col justify-center items-center gap-1.5" onClick={() => router.push("/dashboard")}>
            <LayoutDashboard />
            <p>Dashboard</p>
          </div>
          <div className="w-full h-[81px] flex flex-col justify-center items-center gap-1.5" onClick={() => router.push("/discover")}>
            <Compass />
            <p>Discover</p>
          </div>
          <div className="w-full h-[81px] flex flex-col justify-center items-center gap-1.5">
            <User />
            <p>User</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppBar;
