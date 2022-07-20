import "./CardSocialNetworks.scss";

import { Skeleton } from "@/components";
import { socialNetworks } from "@/data";

const CardSocialNetworks = (isLoading: any) => {
  return (
    <div className="card-social-networks text-purple-200">
      {socialNetworks.map((socialNetwork, index): any => (
        <div className={`social-network__${socialNetwork.name}`} key={index}>
          <i className={`${socialNetwork.icon}`}></i>
          {isLoading ? (
            <Skeleton wrapperStyles={{ height: "1.2rem" }} />
          ) : (
            <p>Not Available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardSocialNetworks;
