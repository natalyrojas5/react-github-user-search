import "./ContainerUser.scss";

import { Photo } from "../Photo";
import { CardUserNames } from "../CardUserNames";
import { CardUserBio } from "../CardUserBio";

import { CardStatistics } from "../CardStatistics";
import { CardSocialMedia } from "../CardSocialMedia";

const ContainerUser = () => {
  return (
    <article className="container-user bg-secondary border-r-06 b-shadow">
      <Photo />
      <CardUserNames isLoading />
      <CardUserBio isLoading />
      <CardStatistics isLoading />
      <CardSocialMedia isLoading />
    </article>
  );
};

export default ContainerUser;
