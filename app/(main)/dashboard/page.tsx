"use client";

import ListCard from "@/components/ListCard";
import TabsCard from "@/components/TabsCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Navbar from "@/components/Navbar";

function Page() {
  const dashboardLists = useQuery(api.List.getDashboardLists);

  return (
    <div>
      <div className="flex flex-col fixed top-[46px] bottom-[81px] left-0 right-0 justify-start items-center overflow-scroll z-1 ">
        <Navbar />
        <TabsCard />
        <div className="w-full h-fit max-w-xl">
          {dashboardLists?.map((list) => (
            <ListCard className="w-full h-fit" list={list} isDashboard={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
