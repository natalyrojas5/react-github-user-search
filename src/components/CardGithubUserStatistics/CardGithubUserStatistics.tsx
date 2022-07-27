import "./CardGithubUserStatistics.scss";

import { statistics } from "@/data";
import { githubUserStatistics } from "@/common";
import { Skeleton } from "@/components";
import { GithubUserStatistics } from "@/interfaces/components";

const CardGithubUserStatistics = ({
  isLoading,
  repos,
  following,
  followers,
}: GithubUserStatistics) => {
  return (
    <div className="card-github-user-statistics bg-primary border-r-06">
      {statistics.map(({ text }, index) => (
        <div
          className={`card-github-user-statistics__${text.toLowerCase()}`}
          key={index}
        >
          <h2 className="text-gray">{text}</h2>
          {isLoading ? (
            <Skeleton wrapperStyles={{ height: "1.5rem", width: "3rem" }} />
          ) : (
            <>
              <p>
                {text.toLowerCase() === githubUserStatistics.repos && repos}
                {text.toLowerCase() === githubUserStatistics.following &&
                  following}
                {text.toLowerCase() === githubUserStatistics.followers &&
                  followers}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGithubUserStatistics;
