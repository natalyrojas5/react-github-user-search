import "./CardStatistics.scss";

import { Skeleton } from "@/components";
import { statistics } from "@/data";

const CardStatistics = (isLoading: any) => {
  return (
    <div className="card-statistics bg-primary border-r-06">
      {statistics.map((statistic): any => (
        <div className={`card-statistics__${statistic.text.toLowerCase()}`}>
          <h2 className="text-gray">{statistic.text}</h2>
          {isLoading ? (
            <Skeleton wrapperStyles={{ height: "1.5rem", width: "3rem" }} />
          ) : (
            <p>0</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardStatistics;
