import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";


export const getVideosByListId = query({
    args: {
        listId: v.id("List")
    
      },
    handler: async (ctx, args) => {
      //authentication control
      // const identity = await ctx.auth.getUserIdentity();
      // if (!identity) throw new Error("401 Unauthenticated");
      // const userId = identity.subject;
  
      //get documents
      const videos = await ctx.db
        .query("Video")
        .filter((q) => q.eq(q.field("listId"), args.listId))
        .order("desc")
        .collect();
  
      return videos;
    }
  });