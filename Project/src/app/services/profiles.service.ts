import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import 'rxjs/RX';
import { Http } from "../../../node_modules/@angular/http";


@Injectable()
export class ProfilesService {

  constructor( private http: Http ) { }

  getProfiles(): Observable<any> {
    return this.http.get( 'https://api.github.com/users' );
  }

}
