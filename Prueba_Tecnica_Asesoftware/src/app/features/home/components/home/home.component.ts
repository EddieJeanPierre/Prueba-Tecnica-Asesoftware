import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sessionActive: boolean;

  constructor() {
    this.sessionActive = false;
  }

  ngOnInit(): void {
    this.verifySession();
  }

  verifySession(): void {
    if (localStorage.getItem('login') != 'true') {
      this.sessionActive = false;
    } else {
      this.sessionActive = true;
    }
  }

}
