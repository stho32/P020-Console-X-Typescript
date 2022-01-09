import { IOutput, ISearchResult } from "../../Interfaces/index"

export class JSONOutput implements IOutput {
    outputData(searchResults: ISearchResult[]): void {
        throw new Error("Method not implemented.");
    }
}