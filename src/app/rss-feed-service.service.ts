import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feed } from './model/feed';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class RssFeedService {

  private rssToJsonServiceBaseUrl: string = 'https://api.rss2json.com/v1/api.json';
  private feed: Feed;

  constructor(
    private http: HttpClient
  ) { }

	getFeedContent(url: string = 'https://edgeguard.podbean.com/feed.xml'): Observable<Feed> {
		if (this.feed) {
			return of(this.feed);
		}
		else {
			let reqParams = new HttpParams()
			.set("rss_url", url)
			.set("api_key","ui9qc6ynpsuzkejlqwe51lqgkywglntr274glwkn")
			.set("count", "1000");
			let res = this.http.get<Feed>(this.rssToJsonServiceBaseUrl, { params: reqParams });

			res.subscribe(feed => 
			{
				this.feed = feed;
			});
			return res;
		}
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