import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";

/*
  Generated class for the FakeUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FakeUserProvider {

  constructor(public apiProvider: Api) {

  }
  findTenLastUsers(){
    return this.apiProvider.get( 'user');
  }

}
