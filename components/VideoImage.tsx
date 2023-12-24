import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  className?: string;
  imageUrl: string;
  width?: number;
  height?: number;
}

function VideoImage({ className, imageUrl, width, height }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsSelected(!isSelected);
  };

  return (
    <div className={className}>
      <div onClick={handleClick} className="overflow-hidden group" style={{ height, width }}>
        {isSelected && <div className="absolute opacity-50 rounded-md bg-black" style={{ height, width }}></div>}
        {isSelected && (
          <div className="absolute flex items-center justify-center" style={{ height, width }}>
            <CheckCircle2 size={24} className="text-white rounded-md overflow-hidden group-hover:opacity-70" />
          </div>
        )}
        <div className="overflow-hidden flex items-center rounded-md" style={{ height, width }}>
          <Image src={imageUrl} alt="Image" width={width} height={height} />
        </div>
      </div>
    </div>
  );
}

export default VideoImage;
