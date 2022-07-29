import { Skeleton } from "@/components";
import { UserBio } from "@/interfaces/components";

const CardUserBio = ({ isLoading, bio }: UserBio) => {
  if (isLoading) {
    return <Skeleton wrapperStyles={{ height: "1.2rem" }} />;
  }
  return (
    <p className="card-user-bio text-gray-100">
      {bio ?? "This profile has no bio"}
    </p>
  );
};

export default CardUserBio;
