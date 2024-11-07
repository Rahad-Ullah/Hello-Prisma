import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "User 1",
  //     email: "user1@example.com",
  //     role: UserRole.user,
  //   },
  // });
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is a bio",
  //     userId: 1,
  //   },
  // });
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "TypeScript",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is a post 5",
      content: "This is a content 5",
      authorId: 1,
      postCategory: {
        // create: {
        //   category: {
        //     connect: {
        //       id: 1,
        //     },
        //   },
        // },
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};

main();
