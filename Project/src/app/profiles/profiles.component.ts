import { Component } from "../../../node_modules/@angular/core";
import { ProfilesService } from "../services/profiles.service";
import { ProfileModel } from "../domain/profile.model";
import { ProfileDetailsModel } from "../domain/profile-details.model";

@Component( {
  selector: 'profiles',
  templateUrl: 'profiles.component.html',
  styleUrls: [ 'profiles.component.scss' ]
} )
export class ProfilesComponent {

  profiles: Array<ProfileModel> = [];
  profileDetails: Array<ProfileDetailsModel> = [];
  isCollapsed = true;
  page: number = 1;
  pageSize: number = 3;

  constructor( private profileService: ProfilesService ) {
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe( data => {
      this.profiles = data;
      console.log( "profiles", this.profiles )
    } )
  }

  getProfileDetails( username: string ) {
    this.profileService.getProfileDetails( username ).subscribe( data => {
      this.profileDetails = data;
      console.log( "profile details", this.profileDetails )
    } )
  }
}
