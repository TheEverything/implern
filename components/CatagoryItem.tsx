"use client";

import { Id } from "@/convex/_generated/dataModel";
import { Laptop2 } from "lucide-react";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  id: Id<"Catagory">;
  catagorTitle: string;
  icon: string;
}

function CatagoryItem({ className, id, catagorTitle, icon }: Props) {
  const router = useRouter();

  return (
    <div className="w-[428px] h-fit flex flex-col justify-start items-start gap-2.5 p-1.5 rounded-lg overflow-visible border border-[#E7E5E4]">
      <div onClick={() => router.push(`/subCategories`)} className="h-fit w-full flex flex-row justify-start items-start gap-1.5 p-2 opacity-100">
        <Laptop2 className="h-fit w-fit grow text-left text-xl font-bold text-[#1C1917] " />
        <div className="w-fit h-fit grow text-left text-xl font-bold text-[#292524] ">{catagorTitle}</div>
      </div>
    </div>
  );
}

export default CatagoryItem;
