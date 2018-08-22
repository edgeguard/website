import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public hidden = true;

  constructor() { }

  ngOnInit() {
  }

  toggleHidden() {
	  this.hidden = !this.hidden;
  }

}
