import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
  // delete single data
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });


  // delete multiple data
  const deleteMany = await prisma.post.deleteMany({
    where: {
      title: "This is a title",
    },
  });

  console.log(deleteMany);
};

deleteData();
