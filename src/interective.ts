import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interective = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // query 1
    const getAllPosts = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    // query 2
    const countUser = await transactionClient.user.count();

    // query 3
    const updateUser = await transactionClient.user.update({
      where: {
        id: 80,
      },
      data: {
        age: 45,
      },
    });

    return {
      getAllPosts,
      countUser,
      updateUser,
    };
  });

  console.log(result);
};

interective();
