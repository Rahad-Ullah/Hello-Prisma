import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  // and filtering used when all conditions meet
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "post",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   or filtering is used when any conditions meet
  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "post",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  //   not filtering
  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "This",
          },
        },
      ],
    },
  });

  // starts with filtering
  const startsWithFiltering = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "u",
      },
    },
  });

  // end with filtering
  const endsWithFiltering = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "com",
      },
    },
  });

  // equals with filtering
  const equalsWithFiltering = await prisma.user.findMany({
    where: {
      email: {
        equals: ".com",
      },
    },
  });

  //   filter by array
  const userNames = ["User 1", "User 2", "User 3"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNames,
      },
    },
  });

  //   query nested indept data
  const inDeptData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(inDeptData, { depth: Infinity });
};

filtering();
