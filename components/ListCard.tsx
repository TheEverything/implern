import React from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Button } from "./ui/button";
import { PieChart, User } from "lucide-react";
import VideoImage from "./VideoImage";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { getVideosByListId } from "@/convex/Video";
import { Id } from "@/convex/_generated/dataModel";

interface Props {
  className?: string;
  id: Id<"List">;
  title: string;
  description: string;
  ownerName: string;
  ownerImageUrl: string;
  upCount: number;
  commentCount: number;
  isDashboard: boolean;
}
export default function ListCard({ className, id, title, description, ownerName, ownerImageUrl, upCount, commentCount, isDashboard }: Props) {
  const videos = useQuery(api.Video.getVideosByListId, { listId: id });
  return (
    <div className={className}>
      <div className="flex flex-col justify-start items-center bg-white py-1.5 border-b border-[#E7E5E4] rounded ">
        <div className="flex h-auto w-full flex-col justify-start items-start px-4 pt-4 ">
          <p className="h-auto w-full font-bold font-sans	 ">{title}</p>
          <p className="h-auto w-full font-thin font-sans	text-xs ">{description}</p>
        </div>
        <div className="w-full h-fit flex flex-row justify-start items-start gap-2 p-4 overflow-scroll">
          {videos?.map((video) => (
            <VideoImage className="w-[84px] h-[47px] max-w-xl " imageUrl={video.imageUrl} />
          ))}
        </div>
        <div className="flex flex-row w-full h-fit justify-between items-center px-4 pb-4">
          <div className="flex flex-row w-fit h-fit justify-center items-center gap-1.5 ">
            {isDashboard && (
              <div className="w-[20px] h-[20px]  ">
                <PieChart />
              </div>
            )}
            <div className="flex flex-row w-fit h-fit justify-center items-center gap-0.5 ">2/5</div>
          </div>

          <div className="flex flex-row justify-between items-center px-4 pb-4 ">
            {ownerImageUrl && <User />}
            {ownerName}
          </div>
        </div>
      </div>
    </div>
  );
}
