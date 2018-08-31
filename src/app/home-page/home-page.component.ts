import { Component, OnInit } from '@angular/core';
import { RssFeedService } from '../rss-feed-service.service';
import { Feed } from '../model/feed';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	feedLoaded: Promise<boolean>;
	public feed: Feed;

	constructor( public rssService: RssFeedService ) { }

	ngOnInit() {
	this.refreshRss();
	}

	refreshRss() {
	this.rssService.getFeedContent('https://edgeguard.podbean.com/feed.xml')
		.subscribe( feed => {
			this.feed = feed;
			this.feedLoaded = Promise.resolve(true);
		});
	}

}
