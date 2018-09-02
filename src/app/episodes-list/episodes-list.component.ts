import { Component, OnInit } from '@angular/core';
import { Feed } from '../model/feed';
import { FeedDataStore } from '../feed-data.store';
import { FeedEntry } from '../model/feed-entry';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

	feedLoaded: Promise<boolean>;
	public episodes: FeedEntry[];

	constructor( public feedStore: FeedDataStore ) { }

	ngOnInit() {
		this.feedStore.getData()
			.subscribe( feed => {
				console.log(feed);
				this.episodes = feed.items;
				this.feedLoaded = Promise.resolve(true);
			});
	}

}
