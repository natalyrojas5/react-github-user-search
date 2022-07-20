import { SkeletonElement } from "../../components/Skeleton";
import { socialNetworks } from "../../data";

import "./CardSocialMedia.scss";

const CardSocialMedia = (isLoading: any) => {
  return (
    <div className="card-social-media text-purple-200">
      {socialNetworks.map((socialNetwork, index): any => (
        <div className={`social-media__${socialNetwork.name}`} key={index}>
          <i className={`${socialNetwork.icon}`}></i>
          {isLoading ? (
            <SkeletonElement wrapperStyles={{ height: "1.2rem" }} />
          ) : (
            <p>Not Available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardSocialMedia;
