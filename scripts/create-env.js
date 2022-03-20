const fs = require("fs");
fs.writeFileSync("./.env", `APIT_URL=${process.env.API_URL}`);
