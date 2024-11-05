import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is a title",
  //       content: "This is a content",
  //       authorName: "Rahad Ullah",
  //     },
  //   });

  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
