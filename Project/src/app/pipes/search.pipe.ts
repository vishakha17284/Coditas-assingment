import { Pipe, PipeTransform } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { ProfileModel } from '../domain/profile.model';
@Pipe( {
  name: 'search'
} )
export class SearchPipe implements PipeTransform {

  constructor( private profileService: ProfilesService ) {
  }

  transform( profiles: Array<ProfileModel>, searchText: string ): ProfileModel[] {
    console.log( "searchText", searchText )
    if ( !profiles ) return [];
    if ( !searchText ) return profiles;
    if ( searchText ) {
      searchText = searchText.toLowerCase();
      profiles = profiles.filter( profile => profile.login.toLowerCase().includes( searchText ) );
    }
    return profiles;
  }
}
