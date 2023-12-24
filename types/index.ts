import { Category, Channel, List, Profile, SubCategory, Video } from "@prisma/client";

export type ExtendedVideo = Video & { channel: Channel };

export type ExtendedList = { videos: ExtendedVideo[]; ownerProfile: Profile } & List;

export type ExtenededCategory = Category & { subCategories: SubCategory[] };
