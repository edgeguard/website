import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RssFeedService } from '../rss-feed-service.service';
import { Feed } from '../model/feed';
import { FeedEntry } from '../model/feed-entry';
import { FeedDataStore } from '../feed-data.store';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

	public guid: string;
	public episode: FeedEntry;
	public loading: Promise<boolean>;
	
  constructor(private route: ActivatedRoute, public feedStore: FeedDataStore) { }

	ngOnInit() {
		this.guid = this.route.snapshot.paramMap.get('guid');
		this.feedStore.getData()
		.subscribe(feed => {
			this.episode = feed.items
			.filter(item => item.guid.endsWith(this.guid))[0];
			console.log(this.episode);
		});
	}

}
