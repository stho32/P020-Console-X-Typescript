import * as bl from "./BL/index"
import * as interfaces from "./Interfaces/index"

const searchResults = [
    new bl.SearchResult("google", "Schnapper", "Ein Schnapper schnappt sich schnappich.", true, 5, 5),
    new bl.SearchResult("google", "Pappich", "Ein Pappich pappt den schnappich.", false, 3, 50)
];

//const output : interfaces.IOutput = new bl.ConsoleOutput();
// const output: interfaces.IOutput = new bl.CsvOutput("test.csv");
const output: interfaces.IOutput = new bl.JSONOutput("test.json");

output.outputData(searchResults);
