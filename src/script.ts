import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Bob',
      username: 'bob@prisma.io',
      password: 'qwqwqw',
    },
  });
  const findAllUser = await prisma.user.findMany();

  console.log(user);
  console.log(findAllUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
