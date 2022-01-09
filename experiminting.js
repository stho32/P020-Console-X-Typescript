const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("test.html", "utf8");
const $ = cheerio.load(html);

$.html();
