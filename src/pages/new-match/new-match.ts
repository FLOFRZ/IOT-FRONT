import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewMatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-match',
  templateUrl: 'new-match.html',
})
export class NewMatchPage {

    currentUser : any= {}
    baby: any = {};
    userMatch: any ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.currentUser = navParams.get('currentUser');
  }

  ionViewDidLoad() {

  }



}
