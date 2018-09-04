import { Component, OnInit } from '@angular/core';
import { FeedEntry } from '../model/feed-entry';
import { RssFeedService } from '../rss-feed-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	feedLoaded: Promise<boolean>;
	public latestEpisode: FeedEntry;

	constructor( public rssService: RssFeedService) { }

	ngOnInit() {
		this.rssService.getFeedContent()
			.subscribe( (feed) => {
				this.latestEpisode = feed.items[0];
				this.feedLoaded = Promise.resolve(true);
			});
	}
}
