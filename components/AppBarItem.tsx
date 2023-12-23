"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  className?: string;
  icon: LucideIcon;
  name: string;
  href: string;
}

function AppBarItem({ className, icon: Icon, name, href }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === `/${href}`;

  return (
    <div className={className}>
      <div className="h-full flex flex-col justify-center items-center gap-1.5 cursor-pointer" onClick={() => router.push(`/${href}`)}>
        <Icon size={20} className={cn("text-stone-400", isActive && "text-stone-800")} />
        <p className={cn("font-semibold text-stone-400 text-[11px]", isActive && "text-stone-800")}>{name}</p>
      </div>
    </div>
  );
}

export default AppBarItem;
