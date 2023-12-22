import CatagoryItem from "@/components/CatagoryItem";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

function Page() {
  const AllCatagories = useQuery(api.Catagory.getAllCatagories);
  return (
    <div className="w-[400px] h-[728px]">
      <div className="fixed bottom-[127px] top-0 right-0 left-0 flex flex-col justify-start items-center z-1 ">
        <div>
        {AllCatagories?.map((catagory) => (
            <CatagoryItem
              className="w-full h-fit"
              id={catagory._id}
              title={catagory.title}
              catagorTitle={catagory.catagorTitle}
              
            />
          ))}
        </div>
        
      </div>
    </div>
  );
}
export default Page;
