import { ExtendedVideo } from "@/types";
import Image from "next/image";

interface Props {
  className?: string;
  video: ExtendedVideo;
}

function VideoItem({ className, video }: Props) {
  return (
    <div className={className}>
      <div className="h-fit flex flex-col justify-center items-center gap-2.5 overflow-hidden">
        <div className="w-full h-fit flex flex-row justify-start items-center p-2 bg-white border-b border-b-stone-200">
          <Image alt={video.title} src={video.imageUrl} height={160} width={92} className="rounded-md" />
          <div className="h-full w-full flex flex-col justify-center items-center gap-1 p-2">
            <div className="h-fit w-full flex flex-row items-center justify-start gap-1.5">
              <p className="h-full w-fit font-medium text-stone-900 text-base">{video.title}</p>
            </div>
            <div className="h-fit w-full flex flex-row items-center justify-start gap-1.5 pt-2">
              <Image alt={video.channel.name} src={video.channel.imageUrl} height={20} width={20} className="rounded-full" />
              <p className="h-fit w-fit font-normal text-stone-900 text-xs">{video.channel.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
