import { ExtenededCategory } from "@/types";
import SubCategoryItem from "./SubCategoryItem";

interface Props {
  className?: string;
  category: ExtenededCategory;
}

function CategoryItem({ className, category }: Props) {
  return (
    <div className={className}>
      <div className="h-fit flex flex-col gap-2.5 p-1.5 rounded-lg border border-[#E7E5E4]">
        <div className="h-fit w-full flex flex-row gap-1.5 p-2">
          <p className="h-fit w-fit text-xl ">{category.icon}</p>
          <p className="h-fit w-fit font-bold text-stone-800 text-xl ">{category.title}</p>
        </div>
        <div className="w-full h-wull flex flex-row flex-wrap gap-2 px-2 pb-2">
          {category.subCategories.map((subcategory) => (
            <SubCategoryItem key={subcategory.id} subCategory={subcategory} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
