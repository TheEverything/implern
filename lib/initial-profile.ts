import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import db from "./db";

async function initialProfile() {
  //user control
  const user = await currentUser();
  if (!user) return redirectToSignIn();
  const userId = user.id;
  const imageUrl = user.imageUrl;
  const fullName = `${user.firstName} ${user.lastName}`;

  //profile control
  const profile = await db.profile.findUnique({
    where: { clerkId: userId }
  });

  //return proile if exist
  if (profile) return profile;

  //create profile if not exist
  const newProfile = await db.profile.create({
    data: { clerkId: userId, fullName, imageUrl }
  });
  return newProfile;
}

export default initialProfile;
