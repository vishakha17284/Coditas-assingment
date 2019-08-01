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
  buttonName: string = "Details";
  isActive: number = null;
  constructor( private profileService: ProfilesService ) {
    this.getProfiles();
  }

  ngOnInit() {
    console.log( "this.query", this.queryField )
    if ( this.queryField.value != '' ) {
      this.queryField.valueChanges
        .subscribe( queryField => this.searchProfile( queryField ) )
    } else {
      this.getProfiles();
    }

  }

  getProfiles() {
    this.profileService.getProfiles().subscribe( data => {
      this.profiles = data;
      console.log( "profiles", this.profiles )
    } )
  }

  searchProfile( searchQuery: string ) {
    this.profileService.searchProfilesByName( searchQuery ).subscribe( data => {
      this.profiles = data.items;
      console.log( "profiles searched", this.profiles )
    } )
  }

  getProfileDetails( username: string ) {
    if ( username ) {
      this.profiles.forEach( element => {
        if ( element.login == username ) {
          this.profileService.getProfileDetails( username ).subscribe( data => {
            this.profileDetails = data;
          } )
        }
      } )
    }
  }

  sortByName( type: string ) {
    if ( type == 'asc' ) {
      this.profiles.sort( ( a, b ) => a.login.localeCompare( b.login ) );
    } else if ( type == 'desc' ) {
      this.profiles.sort( ( a, b ) => b.login.localeCompare( a.login ) );
    }
  }
}
