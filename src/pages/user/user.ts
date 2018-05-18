import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FakeUserProvider} from "../../providers/fake-user/fake-user";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  items : any = [];

  constructor(public  fakeUserProvider:FakeUserProvider, public navCtrl: NavController) {
  }


  ionViewDidLoad() {

    this.fakeUserProvider.findTenLastUsers().subscribe(
        (results:any) => {
          this.items = results
        },
        (error:Error) => {
          console.log(error.message + '('+ error.name+')')
      }
    )
  }
  itemSelected(item: any){
    this.navCtrl.push( "UserDetailPage",{currentUser: item})
  }

}
