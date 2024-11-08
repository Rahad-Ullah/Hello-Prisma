import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  // const getAllFromDB = await prisma.post.findMany();

  //   find first or find first throw
  // const findFirst = await prisma.post.findFirstOrThrow({
  //   where: {
  //     id: 10,   // can be any field
  //   },
  // });

  //   find unique or find unique throw with selections
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 12, // must be unique field
    },
    select: {
      title: true,
      content: true,
      authorId: true,
    },
  });

  console.log({ findUnique });
};

main();
