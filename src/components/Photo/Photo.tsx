import "./Photo.scss";

import { Skeleton } from "@/components";
import { IconGithub } from "@/assets/icons";
import { UserPhoto } from "@/interfaces/components";

const Photo = ({ isLoading, url }: UserPhoto) => {
  return (
    <div className="photo">
      {isLoading ? (
        <Skeleton
          wrapperStyles={{
            height: "6rem",
            width: "6rem",
            borderRadius: "50%",
          }}
        />
      ) : (
        <img src={url ?? IconGithub} alt="Icon Person" />
      )}
    </div>
  );
};

export default Photo;
