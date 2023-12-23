"use client";

import db from "@/lib/db";
import ListCard from "@/components/ListCard";
import TabsCard from "@/components/TabsCard";

import Navbar from "@/components/Navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { subCategoryId: string } }) {
  //get dashbaord lists
  const listsBySubCategoryId = await db.list.findMany({
    where: { subCategoryId: { equals: params.subCategoryId } },
    include: { videos: true }
  });

  return (
    <div>
      <div className="flex flex-col fixed top-[46px] bottom-[81px] left-0 right-0 justify-start items-center overflow-scroll z-1 ">
        <div className="w-full h-fit max-w-xl">
          {listsBySubCategoryId?.map((list) => (
            <ListCard className="w-full h-fit" list={list} isDashboard={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
