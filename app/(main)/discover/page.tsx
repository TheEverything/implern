import CategoryItem from "@/components/CategoryItem";
import db from "@/lib/db";
import { Category } from "@prisma/client";

async function Page() {
  const allCatagories = await db.category.findMany();

  return (
    <div className="w-[400px] h-[728px]">
      <div className="fixed bottom-[127px] top-0 right-0 left-0 flex flex-col justify-start items-center z-1 ">
        <div>
          {allCatagories.map((category: Category) => (
            <CategoryItem className="w-full h-fit" category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Page;
