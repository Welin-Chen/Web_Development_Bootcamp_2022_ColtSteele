// console.log(fs);

// import { mkdir } from "fs";

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("In the callback!");
//   if (err) throw err;
// });

const fs = require("fs");
const folderName = process.argv[2] || "Project";

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
} catch (e) {
  console.log("Something go wrong! \n", e);
}
