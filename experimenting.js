const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("test.html", "utf8");
const $ = cheerio.load(html, {
  xmlMode: true,
});

$(".s-title-instructions-style").each(function (e, value) {
  console.log($(value).text().trim());
});
// $(".s-price-instructions-style").each(function (e, value) {
//   console.log($(value).text());
// });

$(".a-link-normal[title='product-image']").each(function (e, value) {
  console.log($(value).attr("href"));
});

$(".a-icon-alt").each(function (e, value) {
  console.log($(value).text());
});

// console.log();
// fs.writeFileSync("test.xml", $.text(), "utf8");

// console.log()
// function recursiveBlabber(children, indent) {

//     for (const child of children) {
//         const indentSpaces = " " * indent;
//         console.log(indentSpaces + child);
//         if ( child.children.length > 0 ) {
//             console.log(child);
//             //recursiveBlabber(child.children, indent + 2);
//             return;
//         }
//     }

// }

// recursiveBlabber(titles, 0);
