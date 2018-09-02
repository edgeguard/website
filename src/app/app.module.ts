import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RssFeedService } from './rss-feed-service.service';
import { HttpModule } from '@angular/http';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { TruncatePipe } from './truncate.pipe';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { GuidPipe } from './guid.pipe';
import { FeedDataStore } from './feed-data.store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EpisodesListComponent,
    EpisodeCardComponent,
    HomePageComponent,
    TruncatePipe,
    EpisodeDetailComponent,
    GuidPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RssFeedService, FeedDataStore],
  bootstrap: [AppComponent]
})

export class AppModule { }
