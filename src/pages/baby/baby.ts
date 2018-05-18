import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Babyfoot} from "../../models/babyfoot";
import {BabyfootProvider} from "../../providers/babyfoot/babyfoot";
import SailsSocket from "sails-socket";
import _ from "lodash";
import {Observable} from "rxjs/Observable";
import { ChangeDetectorRef } from '@angular/core'
import {Storage} from "@ionic/storage";

/**
 * Generated class for the BabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baby',
  templateUrl: 'baby.html',
})
export class BabyPage {
    items:any;
    allFussballTables: Babyfoot[];
    applicationRef:any;
    user : any;


  constructor(public navCtrl: NavController,public babyfoot: BabyfootProvider, public navParams: NavParams, private ref: ChangeDetectorRef, private storage:Storage) {
      this.allFussballTables = [];
      SailsSocket.on('babyfoot', (msg) => {
          let data = msg.data;

          if(msg.verb == "updated"){
              this.allFussballTables.filter(function(table){
                  if(table.id == data.id){
                      _.extend(table, data) //use lodash function to change the appropriate attributes of the object
                  }
              });
              this.ref.detectChanges(); //This function refreshes the view, _.extend changes the object but does not trigger a refresh on it's own
          } else if (msg.verb == "created") {
              this.allFussballTables.push(msg.data)
          }
      });
      storage.get('user').then((response)=>{
          this.user = response;
      });
  }

    ionViewDidLoad() {

        //GetAll function from the provider, this basicly calls a get on the appropriate route using sockets
        this.babyfoot.findBabyFoots().subscribe(
            (result:any) => {
                console.log(result);
                this.allFussballTables = result.body;

            },
            (error) => {
                console.log(error.message)
            }
        );
    }
    btnSelected(item: any){
        this.navCtrl.push( "NewMatchPage",{currentUser: item})

    }



}
