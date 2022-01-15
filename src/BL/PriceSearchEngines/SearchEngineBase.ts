import { IPriceSearchEngine, ISearchResult } from "../../Interfaces";
const fetch = require("node-fetch");
const cheerio = require("cheerio");

export abstract class SearchEngineBase implements IPriceSearchEngine {
    abstract search(searchTerm: string): Promise<ISearchResult[]>;

    protected async requestWebsite(baseUrl: string, searchQuery : string) {
        const searchQueryEncoded = encodeURIComponent(searchQuery);
        const req = await fetch(`${baseUrl}${searchQueryEncoded}`, { headers: { "User-Agent": "Mozilla/5.0 (Linux; U; Android 2.2; de-de; HTC Magic Build/FRF91) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1" } });
        const res = await req.text();

        const $ = cheerio.load(res, {
            xmlMode: true,
        });

        return $;
    }
}