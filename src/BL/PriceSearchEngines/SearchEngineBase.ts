import { IPriceSearchEngine, ISearchResult } from "../../Interfaces";

export abstract class SearchEngineBase implements IPriceSearchEngine {
    abstract search(searchTerm: string): ISearchResult[];
}