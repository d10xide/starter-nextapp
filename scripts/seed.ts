const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const database = new PrismaClient();

async function main() {
  try {
    const hashedPassword = await bcrypt.hash("supervisor", 10);

    const user = await database.user.create({
      data: {
        name: "admin",
        email: "admin@demo.com",
        username: "admin",
        hashedPassword,
      },
    });

    // await database.product.createMany({
    //   data: [
    //     { title: "LG Monitor 20", price: 1250000 },
    //     { title: "HP Victus 14 Gaming", price: 13500000 },
    //     { title: "V-Gen DDR 3 PC 12600 8GB Low Voltage", price: 288000 },
    //     { title: "Epson L110", price: 2600000 },
    //     { title: "Samsung Smart TV 65", price: 26000000 },
    //     { title: "AC Samsung 1/2 PK", price: 2750000 },
    //     { title: "Kabel HDMI 30m High Quality", price: 350000 },
    //     { title: "HDMI to VGA Extension", price: 150000 },
    //     { title: "Mi True Wireless Basic", price: 380000 },
    //     { title: "Wireless Mouse Logitech M210", price: 185000 },
    //     { title: "HP Laserjet 103", price: 2875000 },
    //     { title: "HP Laserjet 103 Wireless", price: 3100000 },
    //     { title: "Apple Macbook Air M1", price: 13999000 },
    //   ],
    // });

    // await database.customerType.createMany({
    //   data: [{ title: "Reguler" }, { title: "Frequent" }, { title: "VIP" }],
    // });

    // await database.source.createMany({
    //   data: [
    //     { title: "Store" },
    //     { title: "E-commerce" },
    //     { title: "Direct Selling" },
    //     { title: "Email" },
    //     { title: "Social Media" },
    //     { title: "Affiliate" },
    //   ],
    // });

    // await database.productType.createMany({
    //   data: [
    //     { title: "Computer" },
    //     { title: "Home Appliances" },
    //     { title: "Office" },
    //     { title: "Applications" },
    //     { title: "Accessories" },
    //     { title: "Networking" },
    //   ],
    // });

    // await database.cashVariant.createMany({
    //   data: [
    //     {
    //       title: "Working Capital",
    //       type: "WORKING_CAPITAL",
    //       cashType: "REVENUE",
    //     },
    //     {
    //       title: "Personal Capital",
    //       type: "PERSONAL_CAPITAL",
    //       cashType: "REVENUE",
    //     },
    //     {
    //       title: "Opex",
    //       description: "Salary, Electricity, Water, Security, Environment",
    //       type: "OPERATIONAL",
    //       cashType: "COST",
    //     },
    //     {
    //       title: "Capex",
    //       description: "Tools, machine, etc.",
    //       type: "OPERATIONAL",
    //       cashType: "COST",
    //     },
    //     {
    //       title: "Travel",
    //       description: "Transporation and accomodation",
    //       type: "OPERATIONAL",
    //       cashType: "COST",
    //     },
    //     {
    //       title: "Ads",
    //       description: "Product ads",
    //       type: "MARKETING",
    //       cashType: "COST",
    //     },
    //     {
    //       title: "Engangements",
    //       description: "A/B Test, boost post and stories",
    //       type: "MARKETING",
    //       cashType: "COST",
    //     },
    //     {
    //       title: "SEO",
    //       description: "Keyword search, market search",
    //       type: "MARKETING",
    //       cashType: "COST",
    //     },
    //   ],
    // });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database", error);
  } finally {
    await database.$disconnect();
  }
}

main();
