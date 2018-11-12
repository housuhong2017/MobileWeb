import { Component, ViewChild } from '@angular/core';
import { NavController, Slide, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild(Slide) Slides:Slides;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  
  constructor(public navCtrl: NavController) {

  }

}
