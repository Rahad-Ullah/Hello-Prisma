import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
  // get average
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // sum of age
  const ageSum = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // find count by age field
  const count = await prisma.post.aggregate({
    _count: {
      title: true,
    },
    where: {
      published: true,
    },
  });

  // fint record count by count method
  const countData = await prisma.user.count();

  // find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  // find min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(count);
};

aggregate();
