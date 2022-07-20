import "./ContainerUser.scss";

import {
  Photo,
  CardUserNames,
  CardUserBio,
  CardStatistics,
  CardSocialNetworks,
} from "@/components";

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
