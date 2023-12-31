import db from "@/lib/db";
import ListCard from "@/components/ListCard";
import currentProfile from "@/lib/current-profile";

async function Page() {
  const profile = await currentProfile();

  const dashboardLists = await db.list.findMany({
    where: { addedUserIds: { has: profile?.id } },
    include: {
      ownerProfile: true,
      videos: {
        include: { channel: true }
      }
    }
  });

  return (
    <div className="flex flex-col fixed top-0 bottom-[81px] left-0 right-0 justify-start items-center overflow-y-scroll">
      <div className="w-full h-fit max-w-[600px] pb-5">
        {dashboardLists.map((list) => (
          <ListCard key={list.id} className="w-full h-fit" list={list} isDashboard={true} />
        ))}
      </div>
    </div>
  );
}
export default Page;
