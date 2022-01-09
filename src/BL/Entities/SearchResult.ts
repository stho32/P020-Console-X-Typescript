import { ISearchResult } from "../../Interfaces/ISearchResult";

export class SearchResult implements ISearchResult {
    link: string;
    name: string;
    description: string;
    availability: boolean;
    rating: number;
    price: number;
}