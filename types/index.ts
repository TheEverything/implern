import { Category, List, SubCategory, Video } from "@prisma/client";

export type ExtendedList = List & { videos: Video[] };

export type ExtenededCategory = Category & { subCategories: SubCategory[] };
