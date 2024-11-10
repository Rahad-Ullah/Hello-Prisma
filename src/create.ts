import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = await prisma.user.create({
    data: {
      username: "Admin 2",
      email: "admin2@example.com",
      role: UserRole.admin,
    },
  });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is a bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Next.js",
  //   },
  // });

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "This is a post 10 ",
  //     content: "This is a content 10  ",
  //     authorId: 1,
  //     postCategory: {
  //       // create: {
  //       //   category: {
  //       //     connect: {
  //       //       id: 1,
  //       //     },
  //       //   },
  //       // },
  //       create: [
  //         {
  //           categoryId: 1,
  //         },
  //         {
  //           categoryId: 2,
  //         },
  //         {
  //           categoryId: 3,
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });

  console.log(createUser);
};

main();
