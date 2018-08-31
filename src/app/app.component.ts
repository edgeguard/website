import { Component } from '@angular/core';
import { RssFeedService } from './rss-feed-service.service';
import { Feed } from './model/feed';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }

  title = 'edgeguard-website';

}
