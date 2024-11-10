import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  // const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;

  //   delete users table
  const deleteUsers = await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`;
};

rawQuery();
