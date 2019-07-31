import { ProfileModel } from "./profile.model";

export class ProfileDetailsModel {
  name: string;
  id: number;
  full_name: string;
  owner: ProfileModel;
  language: string;
}
