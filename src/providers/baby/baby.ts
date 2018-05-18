import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";
/*
  Generated class for the BabyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabyProvider {

  constructor(public apiProvider: Api) {
    console.log('Hello BabyProvider Provider');
  }

    findBaby(){
        return this.apiProvider.get( 'babyfoot');
    }

}
