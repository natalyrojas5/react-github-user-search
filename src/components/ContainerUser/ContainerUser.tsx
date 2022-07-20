import "./ContainerUser.scss";

import { Photo } from "../Photo";
import { CardUserNames } from "../CardUserNames";
import { CardUserBio } from "../CardUserBio";

import { CardStatistics } from "../CardStatistics";
import { CardSocialNetworks } from "../CardSocialNetworks";

const ContainerUser = () => {
  return (
    <article className="container-user bg-secondary border-r-06 b-shadow">
      <Photo isLoading />
      <CardUserNames isLoading />
      <CardUserBio isLoading />
      <CardStatistics isLoading />
      <CardSocialNetworks isLoading />
    </article>
  );
};

export default ContainerUser;
