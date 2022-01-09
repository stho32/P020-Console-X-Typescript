import { IOutput, ISearchResult } from "../../Interfaces/index"

export class CsvOutput implements IOutput {
    outputData(searchResults: ISearchResult[]): void {
        throw new Error("Method not implemented.");
    }

}