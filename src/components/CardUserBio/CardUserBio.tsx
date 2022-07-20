import { Skeleton } from "@/components";

const CardUserBio = (isLoading: any) => {
  if (isLoading) {
    return <Skeleton wrapperStyles={{ height: "1.2rem" }} />;
  }
  return <p className="card-user-bio text-gray-100">This profile has no bio</p>;
};

export default CardUserBio;
