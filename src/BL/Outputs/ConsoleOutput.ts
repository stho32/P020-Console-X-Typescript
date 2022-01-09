import { IOutput, ISearchResult } from "../../Interfaces/index"

export class ConsoleOutput implements IOutput {
    outputData(searchResults: ISearchResult[]): void {
        throw new Error("Method not implemented.");
    }
}