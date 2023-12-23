import ActionBar from "@/components/ActionBar";
import VideoItem from "@/components/VideoItem";
import db from "@/lib/db";

async function Page({ params }: { params: { listId: string } }) {
  const list = await db.list.findUnique({
    where: { id: params.listId },
    include: { videos: true }
  });

  return (
    <>
      <ActionBar className="fixed top-0 right-0 left-0 h-fit " title={list?.title ?? "Liste Adı"} />
      <div className="flex flex-col fixed bottom-[81px] left-0 right-0 top-[50px] justify-start items-center overflow-y-scroll z-1">
        <div>
          <div className="w-full h-full max-w-[600px] flex flex-row items-center justify-center pt-1 px-4 pl-3">
            <p className="w-full h-fit font-medium text-stone-500 text-sm"></p>
          </div>
          <div className="w-full h-fit max-w-[600px] pb-5 px-2.5">
            {list?.videos?.map((video) => (
              <VideoItem key={video.id} video={video} className="w-full h-fit" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
