import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "jhanker",
      email: "jhanker@prisma.com",
      role: "user",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 8,
    },
    data: {
      age: 30,
    },
  });

  const [createData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(createData, updateData);
};

batchTransaction();
