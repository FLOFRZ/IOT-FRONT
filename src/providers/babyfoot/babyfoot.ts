import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import SailsSocket from 'sails-socket';
import { fromPromise } from 'rxjs/observable/fromPromise';

/*
  Generated class for the BabyfootProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabyfootProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BabyfootProvider Provider');
  }

  findBabyFoots(){
    //le get permet de récupérer la liste des babyfoot
      return fromPromise(SailsSocket.get('/babyfoot'))
  }



}
