"use client";

import { ArrowBigUp, MessageSquare, PieChart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { ExtendedList } from "@/types";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import VideoImage from "./VideoImage";
import Image from "next/image";

interface Props {
  className?: string;
  list: ExtendedList;
  isDashboard: boolean;
}

function ListCard({ className, list, isDashboard }: Props) {
  const userId = useUser().user?.id;
  const router = useRouter();

  const finishedVideosCount = list.videos?.filter((video) => video.finishedUserIds.includes(userId!)).length || 0;
  const totalVideosCount = list.videos?.length || 0;

  return (
    <div
      onClick={() => router.push(`/lists/${list.id}`)}
      className={cn("flex flex-col justify-start items-center bg-white hover:bg-stone-100 cursor-pointer py-1.5 border-b border-[#E7E5E4] rounded", className)}
    >
      <div className="flex h-fit w-full flex-col justify-start items-start gap-1.5 px-4 pt-4 ">
        <p className="h-fit w-full font-bold text-stone-900 text-base">{list.title}</p>
        <p className="h-fit w-full font-medium text-xs text-stone-500">{list.description}</p>
      </div>
      <div className="w-full h-fit flex flex-row justify-start items-center gap-2 p-4 overflow-x-scroll scrollbar-hide">
        {list.videos?.map((video) => (
          <VideoImage key={video.id} width={84} height={47} imageUrl={video.imageUrl} />
        ))}
      </div>
      <div className="flex flex-row w-full h-fit justify-between items-center px-4 pb-4">
        {isDashboard && (
          <div className="flex flex-row w-fit h-fit justify-center items-center gap-1.5">
            <PieChart size={16} className="text-stone-800" />
            <div className="flex flex-row w-fit h-fit justify-center items-center gap-0.5">
              <p className="font-semibold text-stone-800 text-xs ">
                {finishedVideosCount} / {totalVideosCount}
              </p>
            </div>
          </div>
        )}
        {!isDashboard && (
          <div className="flex flex-row w-fit h-fit justify-center items-center gap-3">
            <div className="w-fit h-fit flex flex-row justify-center items-center gap-0.5">
              <ArrowBigUp size={20} className="text-stone-800" />
              <p className="font-semibold text-stone-800 text-xs ">{list.upCount}</p>
            </div>
            <div className="w-fit h-fit flex flex-row justify-center items-center gap-0.5">
              <MessageSquare size={16} className="text-stone-800" />
              <p className="font-semibold text-stone-800 text-xs ">{list.commentCount}</p>
            </div>
          </div>
        )}
        <div className="flex flex-row justify-between items-center px-4 pb-4 gap-1.5">
          <Image src={list.ownerProfile.imageUrl} alt="image" height={20} width={20} className="rounded-full" />
          <p className="font-semibold text-stone-600 text-sm ">{list.ownerProfile.fullName}</p>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
