import { prisma } from "@repo/db";

export const getUser = async () => {
  const user = await prisma.account.findFirst();
  console.log("🚀 ~ getUser ~ user:", user);
  return user;
};
