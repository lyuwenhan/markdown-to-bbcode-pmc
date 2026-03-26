import fs from "fs";
const status = JSON.parse(fs.readFileSync("status.json", "utf8"));
console.log("needs_update=" + status.needsUpdate);
