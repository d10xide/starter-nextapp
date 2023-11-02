const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const database = new PrismaClient();

async function user() {
  try {
    const hashedPassword = await bcrypt.hash("admin", 12);
    const userHashedPassword = await bcrypt.hash("user", 12);

    await database.user.createMany({
      data: [
        {
          name: "admin",
          email: "admin@mail.com",
          username: "admin",
          hashedPassword,
        },
        {
          name: "User1",
          email: "user1@mail.com",
          username: "user1",
          hashedPassword: userHashedPassword,
        },
      ],
    });

    console.log("user created");
  } catch (error) {
    console.log("Error seeding user", error);
  }
}

async function main() {
  try {
    user();
  } catch (error) {
    console.log("Error seeding the database", error);
  } finally {
    await database.$disconnect();
  }
}

main();
