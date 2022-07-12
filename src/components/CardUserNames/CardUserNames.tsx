import "./CardUserNames.scss";

const CardUserNames = () => {
  return (
    <div className="card-user-names">
      <div>
        <h1 className="card-user-names__name">The Octocat</h1>
        <p className="card-user-names__username text-primary">@octocal</p>
      </div>
      <p className="card-user-names__joined">Joined 25 Jun 2011</p>
    </div>
  );
};

export default CardUserNames;
