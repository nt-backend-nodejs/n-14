const fs = require("node:fs");
const path = require("node:path");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(`Xatolik: `, err);
    return;
  }

  console.log(data);
});

const dataFilePath = path.join(__dirname, "data.txt");

fs.readFile(dataFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error(`Xatolik: `, err);

    return;
  }

  console.log(data);
});
