import { Component, OnInit } from '@angular/core';
import { FeedEntry } from '../model/feed-entry';
import { RssFeedService } from '../rss-feed-service.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

	feedLoaded: Promise<boolean>;
	public episodes: FeedEntry[];

	constructor( public rssService: RssFeedService ) { }

	ngOnInit() {
		this.rssService.getFeedContent()
			.subscribe( feed => {
				console.log(feed);
				this.episodes = feed.items;
				this.feedLoaded = Promise.resolve(true);
			});
	}

}
