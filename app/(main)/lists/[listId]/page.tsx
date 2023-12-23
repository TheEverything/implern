"use client";

import db from "@/lib/db";
import ListCard from "@/components/ListCard";

async function Page({ params }: { params: { listId: string } }) {
  //get list by id
  const list = await db.list.findUnique({
    where: { id: params.listId },
    include: { videos: true }
  });

  return (
    <div>
      <div className="flex flex-col fixed top-[46px] bottom-[81px] left-0 right-0 justify-start items-center overflow-scroll z-1 ">
        <div className="w-full h-fit max-w-xl">
          {list?.videos?.map((video) => (
            <div key={video.id}>{video.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
