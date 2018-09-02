import { Injectable } from "@angular/core";
import { Feed } from "./model/feed";
import { FeedEntry } from "./model/feed-entry";
import { RssFeedService } from "./rss-feed-service.service";
import { Observable, of } from "rxjs";
import { map } from "rxjs/internal/operators/map";


@Injectable()
export class FeedDataStore {
	private feed: Feed;
	public episodes: FeedEntry[];
	public latestEpisode: FeedEntry;

	constructor (private rssService: RssFeedService) {}

	init(): Observable<Feed> {
		console.log('Feed Store Init()');
		let obs = this.rssService.getFeedContent('https://edgeguard.podbean.com/feed.xml')
		obs.subscribe(feed => 
		{
			console.log('feed loaded');
			this.feed = feed;
		});
		return obs;
	}

	public getData(): Observable<Feed> {
		if(this.feed) 
			return of(this.feed);
		else
			return this.init();
	}

}