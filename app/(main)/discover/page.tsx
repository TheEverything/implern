import CategoryItem from "@/components/CategoryItem";
import db from "@/lib/db";

async function Page() {
  const allCatagories = await db.category.findMany({ include: { subCategories: true } });

  return (
    <div className="flex flex-col fixed bottom-[81px] left-0 right-0 top-0 justify-start items-center overflow-y-scroll z-1">
      <div className="w-full h-fit max-w-[600px] flex flex-col gap-3 px-3 pt-3 pb-8">
        {allCatagories.map((category) => (
          <CategoryItem key={category.id} className="w-full h-fit" category={category} />
        ))}
      </div>
    </div>
  );
}
export default Page;
