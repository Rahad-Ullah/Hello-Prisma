import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  // single update
  // const singleUpdate = await prisma.post.update({
  //     where: {
  //         id: 7
  //     },
  //     data: {
  //         title: 'Hello World'
  //     }
  // })

  // update multiple data
  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: "Title 2",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });

  // upsert data
  const upsertData = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "Updated title",
    },
    create: {
      title: "Created title",
      content: "Created content",
      authorName: "Created author",
    },
  });

  console.log(upsertData);
};

updates();
