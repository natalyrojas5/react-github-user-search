import "./GithubUser.scss";

import {
  Photo,
  Switch,
  Search,
  CardUserNames,
  CardUserBio,
  CardStatistics,
  CardSocialNetworks,
} from "@/components";

const GithubUser = () => {
  return (
    <section className="github-user">
      <header className="github-user__header">
        <Switch />
        <Search />
      </header>
      <article className="github-user__container bg-secondary border-r-06 b-shadow">
        <Photo isLoading />
        <CardUserNames isLoading />
        <CardUserBio isLoading />
        <CardStatistics isLoading />
        <CardSocialNetworks isLoading />
      </article>
    </section>
  );
};

export default GithubUser;
