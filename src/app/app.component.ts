import { Component } from '@angular/core';
import { RssFeedService } from './rss-feed-service.service';
import { Feed } from './model/feed';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public feed: Feed;
  constructor(
    private rssService: RssFeedService
  ) { }

  title = 'edgeguard-website';

  ngOnInit() {
    this.refreshRss();
  }

  refreshRss() {
    this.rssService.getFeedContent('https://edgeguard.podbean.com/feed.xml')
        .subscribe( feed => {
          console.log(feed);
          this.feed = feed;
        });
  }
}
