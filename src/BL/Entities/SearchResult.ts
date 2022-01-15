import { ISearchResult } from "../../Interfaces/ISearchResult";

export class SearchResult implements ISearchResult {
    link: string;
    name: string;
    rating: number;
    price: number;

    constructor(link: string, name: string, rating: number, price: number) {
        this.link = link;
        this.name = name;
        this.rating = rating;
        this.price = price;
    }
}