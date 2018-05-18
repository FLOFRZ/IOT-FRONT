import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {TeamMembersProvider} from "../../providers/team-members/team-members";

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  user : any;
  team : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private storage:Storage, private teamMembersProvider :TeamMembersProvider) {
      this.team = {};
      storage.get('user').then((response)=>{
          this.user = response;
          this.loadList();
      });
  }

  ionViewDidLoad() {


  }
  loadList(){
      console.log(this.user)
      if (this.user.team){
          this.teamMembersProvider.findTeamMember(this.user.team).subscribe(
              (results:any) => {

                  console.log(results)
                  this.team = results
              },
              (error:Error) => {
                  console.log(error.message + '('+ error.name+')')
              }
          )
      }

  }

}
