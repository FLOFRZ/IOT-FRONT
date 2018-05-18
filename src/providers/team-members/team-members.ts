import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from "../api/api";

/*
  Generated class for the TeamMembersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeamMembersProvider {

  constructor(public http: HttpClient, private apiProvider: Api) {

  }

    findTeamMember(teamId : any){
        return this.apiProvider.get( 'team/' + teamId);
    }

}
