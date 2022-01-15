import { SearchResult } from "..";
import { ISearchResult } from "../../Interfaces/index";
import { SearchEngineBase } from "./SearchEngineBase";

export class AmazonPriceSearchEngine extends SearchEngineBase {
    async search(searchTerm: string): Promise<ISearchResult[]> {
        const baseUrl = "https://www.amazon.de";
        const $ = await this.requestWebsite(`${baseUrl}/s?k=`, searchTerm);

        let titles : any[] = [];
        let prices : any[] = [];
        let links : any[] = [];
        let ratings : any[] = [];

        $(".s-title-instructions-style").each(function (index:any, value:any) {
            titles.push($(value).text().trim());
        });
        $(".s-price-instructions-style").each(function (index:any, value:any) {
            prices.push($(value).text());
        });
        
        $(".a-link-normal[title='product-image']").each(function (index:any, value:any) {
            links.push(baseUrl + $(value).attr("href"));
        });
        
        $(".a-icon-alt").each(function (index:any, value:any) {
            ratings.push($(value).text());
        });

        let result : ISearchResult[] = [];

        titles.forEach((title,index)  => {
            result.push(new SearchResult(
                links[index],
                title,
                ratings[index],
                prices[index]
            ));
        });
        
        return result;
    }
}