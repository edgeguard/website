import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RssFeedService } from '../rss-feed-service.service';
import { FeedEntry } from '../model/feed-entry';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

	public guid: string;
	public episode: FeedEntry;
	public loading = true;
	
  constructor(private route: ActivatedRoute, public rssService: RssFeedService) { }

	ngOnInit() {
		this.guid = this.route.snapshot.paramMap.get('guid');
		this.rssService.getFeedContent()
		.subscribe(feed => {
			this.episode = feed.items
			.filter(item => item.guid.endsWith(this.guid))[0];
			console.log(this.episode);
			this.loading = false;
		});
	}

}
