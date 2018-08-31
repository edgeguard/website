import { Component, OnInit } from '@angular/core';
import { Feed } from '../model/feed';
import { RssFeedService } from '../rss-feed-service.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

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
