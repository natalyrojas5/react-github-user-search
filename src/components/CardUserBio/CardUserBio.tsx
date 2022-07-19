import { SkeletonElement } from "../../components/Skeleton";

const CardUserBio = (isLoading = true) => {
  if (isLoading) {
    return <SkeletonElement wrapperStyles={{ height: "1.2rem" }} />;
  }
  return <p className="card-user-bio text-gray-100">This profile has no bio</p>;
};

export default CardUserBio;
