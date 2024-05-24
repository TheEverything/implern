"use client";

import { SubCategory } from "@prisma/client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  subCategory: SubCategory;
  href: string;
}

function SubCategoryItem({ className, subCategory, href }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(href)}
      className={cn(
        "w-fit h-fit flex flex-row justify-start items-center gap-1.5 p-2 bg-white hover:bg-stone-100 rounded-full border border-stone-200 cursor-pointer",
        className
      )}
    >
      <Image src={subCategory.imageUrl} alt={subCategory.title} height={16} width={16} className="rounded" />
      <p className="h-fit w-fit font-semibold text-stone-600 text-xs ">{subCategory.title}</p>
    </div>
  );
}

export default SubCategoryItem;
