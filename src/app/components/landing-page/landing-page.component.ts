import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  title = 'Welcome to[Catalog Manager]';
  landingPageLabel = 'Not a member?';
  btnRegister = 'Register';
  btnLogin = 'Log In'

  constructor() { }

  ngOnInit() {
  }

}
