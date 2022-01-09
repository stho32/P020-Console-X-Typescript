const cheerio = require("cheerio");
const fs = require("fs");

const html = fs.readFileSync("test.html", "utf8");
const $ = cheerio.load(html);

//console.log($.html());


const titles = $(".s-title-instructions-style");

const prices = $(".s-price-instructions-style");

function recursiveBlabber(children, indent) {

    for (const child of children) {
        const indentSpaces = " " * indent;
        console.log(indentSpaces + child);
        if ( child.children.length > 0 ) {
            console.log(child);
            //recursiveBlabber(child.children, indent + 2);
            return;
        }
    }

}

recursiveBlabber(titles, 0);



