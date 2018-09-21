import { Component, OnInit, Input } from '@angular/core';
import { FeedEntry } from '../model/feed-entry';

@Component({
  selector: 'episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {
	@Input() episodeData: FeedEntry;
	expanded = false;
	episodeNumber: number;
	episodeTitle: string;
	constructor() { }

	ngOnInit() {
		this.parseTitle(this.episodeData.title);
	}

	parseTitle(title: string) {
		console.log(title);
		let parts = title.split(' - ');
		if(parts.length < 2) {
			parts = title.split(': ');
		}
		this.episodeTitle = parts[1].trim();
		this.episodeNumber = parts[0].match(/\d+/g).map(Number)[0];
	}

}
