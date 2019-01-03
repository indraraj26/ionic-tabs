import { Tabs, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core'; 
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = InfoPage;
  public setIndex: number;
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(private navParams:NavParams) {

  }

  ionViewDidEnter(){
    this.setIndex = this.navParams.data;
   if(this.setIndex == 0 ||  this.setIndex == 1 || this.setIndex == 2) {
      this.tabRef.select(this.setIndex);
      console.log("Menu select tab is opened")
    }
    else {
      console.log("Default home page is opened")
      this.tabRef.select(0);
    } 
 }
}