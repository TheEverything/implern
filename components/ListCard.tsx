"use client";

import { PieChart, User } from "lucide-react";
import { clerkClient } from "@clerk/nextjs";
import { ExtendedList } from "@/types";
import VideoImage from "./VideoImage";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  list: ExtendedList;
  isDashboard: boolean;
}

function ListCard({ className, list, isDashboard }: Props) {
  // const owner = await clerkClient.users.getUser(list.ownerId);
  const owner = { firstName: "John", lastName: "Doe" };
  const router = useRouter();

  return (
    <div className={className}>
      <div
        onClick={() => router.push(`/lists/${list.id}`)}
        className="flex flex-col justify-start items-center bg-white py-1.5 border-b border-[#E7E5E4] rounded"
      >
        <div className="flex h-auto w-full flex-col justify-start items-start px-4 pt-4 ">
          <p className="h-auto w-full font-bold">{list.title}</p>
          <p className="h-auto w-full font-thin text-xs ">{list.description}</p>
        </div>
        <div className="w-full h-fit flex flex-row justify-start items-start gap-2 p-4 overflow-scroll">
          {list.videos?.map((video) => (
            <VideoImage className="w-[84px] h-[47px]" imageUrl={video.imageUrl} />
          ))}
        </div>
        <div className="flex flex-row w-full h-fit justify-between items-center px-4 pb-4">
          <div className="flex flex-row w-fit h-fit justify-center items-center gap-1.5 ">
            {isDashboard && <PieChart size={16} />}
            <div className="flex flex-row w-fit h-fit justify-center items-center gap-0.5 ">2/5</div>
          </div>
          <div className="flex flex-row justify-between items-center px-4 pb-4 ">{owner.firstName + " " + owner.lastName}</div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
