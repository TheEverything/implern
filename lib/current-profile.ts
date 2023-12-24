import { auth } from "@clerk/nextjs";
import db from "./db";

async function currentProfile() {
  const { userId } = auth();

  if (!userId) return null;

  const profile = await db.profile.findUnique({
    where: { clerkId: userId }
  });

  return profile;
}

export default currentProfile;
