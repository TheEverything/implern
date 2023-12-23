"use client";

import ListCard from "@/components/ListCard";
import TabsCard from "@/components/TabsCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Navbar from "@/components/Navbar";

function Page() {
  const dashBoradLists = useQuery(api.List.getDashboardLists);

  return (
    <div>
      <div className="flex flex-col fixed top-[46px] bottom-[81px] left-0 right-0 justify-start items-center overflow-scroll z-1 ">
        <Navbar />
        <TabsCard />
        <div className="w-full h-fit max-w-xl">
          {dashBoradLists?.map((list) => (
            <ListCard
              className="w-full h-fit"
              id={list._id}
              title={list.title}
              description={list.description}
              ownerName={list.ownerName}
              upCount={list.upCount}
              commentCount={list.commentCount}
              ownerImageUrl={list.ownerImageUrl}
              isDashboard={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
