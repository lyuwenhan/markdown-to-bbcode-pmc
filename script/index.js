const fs = require("fs");
const status = JSON.parse(fs.readFileSync("status.json", "utf8"));
console.log("needs_update=" + status.needsUpdate);
fs.writeFileSync("status.json", JSON.stringify({
	needsUpdate: false
}, null, "\t"));
