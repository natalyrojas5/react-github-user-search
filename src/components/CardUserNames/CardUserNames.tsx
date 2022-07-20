import "./CardUserNames.scss";

import Skeleton from "./Skeleton";

const CardUserNames = (isLoading: any) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div className="card-user-names">
      <div>
        <h1 className="card-user-names__name">The Octocat</h1>
        <p className="card-user-names__username text-primary">@octocal</p>
      </div>
      <p className="card-user-names__joined text-gray-300">
        Joined 25 Jun 2011
      </p>
    </div>
  );
};

export default CardUserNames;
