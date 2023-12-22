import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";


export const getDashboardLists = query({
    handler: async (ctx) => {
      //authentication control
      // const identity = await ctx.auth.getUserIdentity();
      // if (!identity) throw new Error("401 Unauthenticated");
      // const userId = identity.subject;
  
      //get documents
      const documents = await ctx.db
        .query("List")
        .filter((q) => q.eq(q.field("isUserAdded"), true))
        .order("desc")
        .collect();
  
      return documents;
    }
  });