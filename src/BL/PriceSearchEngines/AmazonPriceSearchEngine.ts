import { IPriceSearchEngine, ISearchResult } from "../../Interfaces/index";

class AmazonPriceSearchEngine implements IPriceSearchEngine {

    search(searchTerm: string): ISearchResult[] {
        throw new Error("Method not implemented.");
    }

}