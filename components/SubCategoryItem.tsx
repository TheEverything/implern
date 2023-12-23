"use client";

import { SubCategory } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  subCategory: SubCategory;
}

function SubCategoryItem({ className, subCategory }: Props) {
  const router = useRouter();

  return (
    <div className={className}>
      <div
        onClick={() => router.push(`/subCategories/${subCategory.id}`)}
        className="w-fit h-fit flex flex-row justify-start items-center gap-1.5 p-2 bg-white hover:bg-stone-100 rounded-full border border-stone-200 cursor-pointer"
      >
        <Image src={subCategory.imageUrl} alt={subCategory.title} height={16} width={16} className="rounded" />
        <p className="h-fit w-fit font-semibold text-stone-600 text-xs">{subCategory.title}</p>
      </div>
    </div>
  );
}

export default SubCategoryItem;
