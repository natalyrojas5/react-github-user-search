import "./GithubUser.scss";

import {
  Photo,
  Switch,
  Search,
  CardUserNames,
  CardUserBio,
  GithubUserStatistics,
  CardSocialNetworks,
} from "@/components";
import useGithubUser from "@/hooks/useGithubUser";
import useSwichMode from "@/hooks/useSwichMode";
import { hasValues } from "./utils";

const GithubUser = () => {
  const { changeMode, theme } = useSwichMode();
  const { searchUser, handleInputChange, state } = useGithubUser();
  const {
    loading,
    user: { names, bio, githubStatistics, photo, socialNetworks },
  } = state;
  const hasNames = hasValues(names);

  return (
    <section className="github-user">
      <header className="github-user__header">
        <Switch changeMode={changeMode} theme={theme} />
        <Search onSearch={searchUser} handleInputChange={handleInputChange} />
      </header>
      {hasNames}
      {hasNames && (
        <article className="github-user__container bg-secondary border-r-06 b-shadow">
          <Photo isLoading={loading} url={photo} />
          <CardUserNames
            isLoading={loading}
            username={names.username}
            name={names.name}
            createdAt={names.createdAt}
          />
          <CardUserBio isLoading={loading} bio={bio} />
          <GithubUserStatistics
            isLoading={loading}
            repos={githubStatistics.repos}
            following={githubStatistics.following}
            followers={githubStatistics.followers}
          />
          <CardSocialNetworks
            isLoading={loading}
            twitter={socialNetworks.twitter}
            github={socialNetworks.github}
            location={socialNetworks.location}
            company={socialNetworks.company}
          />
        </article>
      )}
    </section>
  );
};

export default GithubUser;
