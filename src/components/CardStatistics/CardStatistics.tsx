import "./CardStatistics.scss";

const CardStatistics = () => {
  return (
    <div className="card-statistics bg-primary border-r-06">
      <div className="card-statistics__repos">
        <h2 className="text-gray">Repos</h2>
        <p>0</p>
      </div>
      <div className="card-statistics__followers">
        <h2 className="text-gray">Followers</h2>
        <p>0</p>
      </div>
      <div className="card-statistics__following">
        <h2 className="text-gray">Following</h2>
        <p>0</p>
      </div>
    </div>
  );
};

export default CardStatistics;
