import { Component, OnInit, Input } from '@angular/core';
import { FeedEntry } from '../model/feed-entry';

@Component({
  selector: 'episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss']
})
export class EpisodeCardComponent implements OnInit {
	@Input() episodeData: FeedEntry;
	constructor() { }

	ngOnInit() {
		
	}

}
