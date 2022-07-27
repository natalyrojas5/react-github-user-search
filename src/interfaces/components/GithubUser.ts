import { GithubUserStatistics } from "./GithubUserStatistics";
import { UserBio } from "./UserBio";
import { UserNames } from "./UserNames";

export interface GithubUserState {
  user: GithubUser;
  loading: boolean;
  error: string;
}
export interface GithubUser {
  names: UserNames;
  bio: UserBio;
  githubStatistics: GithubUserStatistics;
}
