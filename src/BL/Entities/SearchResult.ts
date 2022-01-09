import { ISearchResult } from "../../Interfaces/ISearchResult";

export class SearchResult implements ISearchResult {
    link: string;
    name: string;
    description: string;
    availability: boolean;
    rating: number;
    price: number;

    constructor(link: string, name: string, description: string, availability: boolean, rating: number, price: number) {
        this.link = link;
        this.name = name;
        this.description = description;
        this.availability = availability;
        this.rating = rating;
        this.price = price;
    }
}