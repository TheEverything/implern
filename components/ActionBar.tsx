"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  title: string;
  buttonName?: string;
  isRightButtonVisible?: boolean;
}

function ActionBar({ className, title, buttonName, isRightButtonVisible }: Props) {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="h-[50px] flex flex-row items-center justify-center gap-2.5 pr-4 pl-2 bg-white">
        <div className="w-full h-full max-w-[600px] flex flex-row justify-start items-center">
          <div onClick={() => router.back()} className="w-fit h-fit flex flex-row items-center justify-center gap-1 p-2 cursor-pointer hover:opacity-50">
            <ChevronLeft size={16} className="text-stone-900" />
            <p className="font-bold text-stone-900 text-base">{title}</p>
          </div>
          {isRightButtonVisible && <p className="h-fit w-fit font-medium text-stone-500 text-xs ">{buttonName}</p>}
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
