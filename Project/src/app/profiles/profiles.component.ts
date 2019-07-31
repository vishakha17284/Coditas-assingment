import { Component } from "../../../node_modules/@angular/core";
import { ProfilesService } from "../services/profiles.service";
import { ProfileModel } from "../domain/profile.model";
import { ProfileDetailsModel } from "../domain/profile-details.model";
import { FormControl } from "../../../node_modules/@angular/forms";

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
  searchText: string = '';
  queryField: FormControl = new FormControl();


  constructor( private profileService: ProfilesService ) {
    this.getProfiles();
  }

  ngOnInit() {
    console.log( "this.query", this.queryField )
    this.queryField.valueChanges
      .subscribe( queryField => this.searchProfile( queryField ) )
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe( data => {
      this.profiles = data;
      console.log( "profiles", this.profiles )
    } )
  }

  searchProfile( searchQuery: string ) {
    this.profileService.searchProfilesByName( searchQuery ).subscribe( data => {
      this.profiles = data;
      console.log( "profiles searched", this.profiles )
    } )
  }
  getProfileDetails( username: string ) {
    this.profileService.getProfileDetails( username ).subscribe( data => {
      this.profileDetails = data;
      console.log( "profile details", this.profileDetails )
    } )
  }
}
