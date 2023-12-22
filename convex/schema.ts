import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  List: defineTable({
    title: v.string(),
    description: v.string(),
    slug: v.string(),
    ownerName: v.string(),
    ownerImageUrl: v.string(),
    upCount: v.number(),
    commentCount: v.number(),
    isUserAdded: v.boolean(),
    listCatagoryId: v.string(),
  }),
  Video: defineTable({
    listId: v.string(),
    title: v.string(),  
    slug: v.string(),
    isFinished: v.boolean(),
    youtubeUrl: v.string(),
    channelId: v.string(),
    minutes: v.number(),
    imageUrl: v.string(),
    listCatagoryId: v.string(),
  }),
  Catagory: defineTable({
    id: v.string(),
    title: v.string(),
    icon: v.string(),
    linkCatagoryI: v.string(),
  })
});
