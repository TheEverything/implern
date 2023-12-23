import { List, Video } from "@prisma/client";

export type ExtendedList = List & { videos: Video[] };
