import { Component } from "../../../node_modules/@angular/core";
import { ProfilesService } from "../services/profiles.service";
import { ProfileModel } from "../domain/profile.model";

@Component( {
  selector: 'profiles',
  templateUrl: 'profiles.component.html'
} )
export class ProfilesComponent {

  profiles: Array<ProfileModel> = [];

  constructor( private profileService: ProfilesService ) {
    console.log( "hello profies" )
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe( data => {
      console.log( "data", data.text() )
      this.profiles = data.text()[ 0 ];
    } )
  }
}
