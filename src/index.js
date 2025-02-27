const app = require("./app");

async function main() {
  await app.listen(3303);
  console.log("server run on port 3303");
}

main();
