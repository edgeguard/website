import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feed } from './model/feed';

@Injectable()
export class RssFeedService {

  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
  private feed: Feed;

  constructor(
    private http: Http
  ) { }

  getFeedContent(url: string = 'https://edgeguard.podbean.com/feed.xml'): Observable<Feed> {
	if (this.feed) {
		return of(this.feed);
	}
	else {
		let res = this.http.get(this.rssToJsonServiceBaseUrl + url)
		.pipe(map(this.extractFeeds));
		res.subscribe(feed => 
			{
				this.feed = feed;
			});
		return res;
	}
 
  }

  private extractFeeds(res: Response): Feed {
    let feed = res.json();
    return feed || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}