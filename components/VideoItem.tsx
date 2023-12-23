import { Video } from "@prisma/client";
import Image from "next/image";

interface Props {
  className?: string;
  video: Video;
}

function VideoItem({ className, video }: Props) {
  return (
    <div className={className}>
      <div className="h-fit flex flex-col justify-center items-center gap-2.5 rounded-md overflow-hidden">
        <div className="w-full h-fit flex flex-row justify-center items-center p-2 bg-white border-b border-b-stone-200 ">
          <Image alt={video.title} src={video.imageUrl} height={160} width={92} className="rounded-md" />
          <div className="h-full w-full flex flex-col justify-center items-center gap-1 p-2 ">
            <p className="h-fit w-full flex f">{video.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
