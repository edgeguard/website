import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'episodes', component: EpisodesListComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}


