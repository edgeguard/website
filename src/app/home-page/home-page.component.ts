import { Component, OnInit } from '@angular/core';
import { Feed } from '../model/feed';
import { FeedDataStore } from '../feed-data.store';
import { FeedEntry } from '../model/feed-entry';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	feedLoaded: Promise<boolean>;
	public latestEpisode: FeedEntry;

	constructor( public feedStore: FeedDataStore) { }

	ngOnInit() {
		this.feedStore.getData()
			.subscribe( (feed) => {
				this.latestEpisode = feed.items[0];
				this.feedLoaded = Promise.resolve(true);
			});
	}
}
