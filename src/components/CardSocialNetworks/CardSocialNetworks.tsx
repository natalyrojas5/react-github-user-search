import "./CardSocialNetworks.scss";

import { Skeleton } from "@/components";
import { socialNetworks as socialNetworksData } from "@/data";
import { SocialNetworks } from "@/interfaces/components";
import { socialNetworks } from "@/common";

const CardSocialNetworks = ({
  isLoading,
  twitter,
  github,
  location,
  company,
}: SocialNetworks) => {
  const valueValidate = (name: string, socialMedia: string, value: string) => {
    return name === socialMedia ? value ?? "Not Available" : "";
  };

  const hasValue = (name: string, socialMedia: string, value: string) => {
    return name === socialMedia ? value ?? "empty" : "";
  };
  return (
    <div className="card-social-networks text-purple-200">
      {socialNetworksData.map(({ name, icon }, index) => (
        <div
          className={`social-network__${name} 
          ${hasValue(name, socialNetworks.twitter, twitter)}
          ${hasValue(name, socialNetworks.github, github)}
          ${hasValue(name, socialNetworks.location, location)}
          ${hasValue(name, socialNetworks.company, company)}
        `}
          key={index}
        >
          <i className={`${icon}`}></i>
          {isLoading ? (
            <Skeleton wrapperStyles={{ height: "1.2rem" }} />
          ) : (
            <>
              <p>
                {valueValidate(name, socialNetworks.twitter, twitter)}
                {valueValidate(name, socialNetworks.github, github)}
                {valueValidate(name, socialNetworks.location, location)}
                {valueValidate(name, socialNetworks.company, company)}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardSocialNetworks;
