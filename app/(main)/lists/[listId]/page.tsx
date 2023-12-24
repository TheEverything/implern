import ActionBar from "@/components/ActionBar";
import VideoItem from "@/components/VideoItem";
import db from "@/lib/db";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { listId: string } }) {
  const list = await db.list.findUnique({
    where: { id: params.listId },
    include: {
      ownerProfile: true,
      videos: { include: { channel: true } }
    }
  });
  if (!list) return redirect("/dashboard ");

  return (
    <>
      <ActionBar className="fixed top-0 right-0 left-0 h-fit " title={list.title} />
      <div className="flex flex-col fixed bottom-[81px] left-0 right-0 top-[50px] justify-start items-center overflow-y-scroll z-1">
        <div className="w-full h-fit max-w-[600px] flex flex-row items-center justify-start pt-1 px-4 pb-3">
          <p className="font-medium text-stone-500 text-sm">{list.description}</p>
        </div>
        <div className="w-full h-fit max-w-[600px] flex flex-col justify-start items-center pb-5 pl-2.5 pr-3">
          {list.videos?.map((video) => (
            <VideoItem key={video.id} video={video} className="w-full h-fit" />
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;
