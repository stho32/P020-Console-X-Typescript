/**
 * We scrape a big bunch of different web shops and maybe other systems
 * that give us prices!
 */
 interface IPriceSearchEngine {
    search(searchTerm: string): ISearchResult[];
}
