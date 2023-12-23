import db from "@/lib/db";
import ListCard from "@/components/ListCard";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  //authentication control
  const { userId } = auth();
  if (!userId) return redirect("/login");

  //get dashbaord lists
  const dashboardLists = await db.list.findMany({
    where: { addedUserIds: { has: userId } }
  });

  return (
    <div>
      <div className="flex flex-col fixed top-[46px] bottom-[81px] left-0 right-0 justify-start items-center overflow-scroll z-1">
        <div className="w-full h-fit max-w-xl">
          {dashboardLists.map((list) => (
            <ListCard className="w-full h-fit" list={list} isDashboard={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
