import { ISearchResult } from "../../Interfaces/index";
import { SearchEngineBase } from "./SearchEngineBase"

class AmazonPriceSearchEngine implements SearchEngineBase {

    search(searchTerm: string): ISearchResult[] {
        throw new Error("Method not implemented.");
    }

}