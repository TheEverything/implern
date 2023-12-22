import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";


export const getAllCatagories = query({
    handler: async (ctx) => {
      //authentication control
      // const identity = await ctx.auth.getUserIdentity();
      // if (!identity) throw new Error("401 Unauthenticated");
      // const userId = identity.subject;
  
      //get documents
      const documents = await ctx.db
        .query("Catagory")
        .filter((q) => q.eq(q.field("linkCatagoryI"), "bir şey koymak lazım"))
        .order("desc")
        .collect();
  
      return documents;
    }
  });


