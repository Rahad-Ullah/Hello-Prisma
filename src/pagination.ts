import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pagination = async () => {
  // offset pagination
  //   const offsetPagination = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });

  // offset pagination
  const cursorBasedPagination = await prisma.post.findMany({
    skip: 5,
    take: 5,
    cursor: {
      id: 10,
    },
  });

  console.log(cursorBasedPagination);
};

pagination();
