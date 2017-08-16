import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toProfile(){
    this.navCtrl.push("ProfilePage");
  }

  toInbox(){
    this.navCtrl.push("InboxPage");
  }

}
