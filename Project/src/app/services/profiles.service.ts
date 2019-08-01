import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import 'rxjs/RX';
import { ProfileModel } from "../domain/profile.model";
import { HttpClient } from '@angular/common/http';
import { ProfileDetailsModel } from "../domain/profile-details.model";


@Injectable()
export class ProfilesService {

  constructor( private http: HttpClient ) { }

  getProfiles(): Observable<ProfileModel[]> {
    return this.http.get<ProfileModel[]>( 'https://api.github.com/users' );
  }

  searchProfilesByName( searchQuery: string ): Observable<any> {
    return this.http.get<any>( `https://api.github.com/search/users?q=${ searchQuery }` );
  }

  getProfileDetails( username: string ): Observable<ProfileDetailsModel[]> {
    return this.http.get<ProfileDetailsModel[]>( `https://api.github.com/users/${ username }/repos` );
  }

}
