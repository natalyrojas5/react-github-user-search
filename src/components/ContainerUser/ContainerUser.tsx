import "./ContainerUser.scss";

import { Photo } from "../Photo";
import { CardUserNames } from "../CardUserNames";
import { CardUserBio } from "../CardUserBio";

import { CardStatistics } from "../CardStatistics";
import { CardSocialMedia } from "../CardSocialMedia";

const ContainerUser = () => {
  return (
    <article className="container-user bg-secondary border-r-06">
      <Photo />
      <CardUserNames />
      <CardUserBio />
      <CardStatistics />
      <CardSocialMedia />
    </article>
  );
};

export default ContainerUser;
