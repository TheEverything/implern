import db from "@/lib/db";
import ListCard from "@/components/ListCard";
import ActionBar from "@/components/ActionBar";
import CategoryItem from "@/components/CategoryItem";

async function Page({ params }: { params: { subCategoryId: string } }) {
  const subCategory = await db.subCategory.findUnique({
    where: { id: params.subCategoryId },
    include: {
      category: true,
      lists: { include: { videos: true } }
    }
  });

  return (
    <>
      <ActionBar className="fixed top-0 right-0 left-0 h-fit " title={`${subCategory?.category.title} / ${subCategory?.title}`} />
      <div className="flex flex-col fixed top-[50px] bottom-[81px] left-0 right-0 justify-start items-center overflow-y-scroll">
        <div className="w-full h-fit max-w-[600px] pb-5">
          {subCategory?.lists.map((list) => (
            <ListCard key={list.id} className="w-full h-fit" list={list} isDashboard={false} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Page;
