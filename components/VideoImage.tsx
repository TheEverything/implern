import Image from "next/image";

interface Props {
  className?: string;
  imageUrl: string;
}

function VideoImage({ className, imageUrl }: Props) {
  return (
    <div className={className}>
      <div className="w-[80px] h-[47px] rounded-md overflow-hidden">
        <Image src={imageUrl} alt="Tailwind is ending up" width={80} height={47} />
      </div>
    </div>
  );
}

export default VideoImage;
