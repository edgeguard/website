import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'contact', component: ContactPageComponent },
	{ path: 'episodes', component: EpisodesListComponent },
	{ path: 'episodes/:guid', component: EpisodeDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}


