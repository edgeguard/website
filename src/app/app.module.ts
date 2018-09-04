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
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EpisodesListComponent,
    EpisodeCardComponent,
    HomePageComponent,
    TruncatePipe,
    EpisodeDetailComponent,
    GuidPipe,
    AboutPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RssFeedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
