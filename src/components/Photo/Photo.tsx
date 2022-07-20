import "./Photo.scss";

import { Skeleton } from "@/components";
import { IconGithub } from "@/assets/icons";

const Photo = (isLoading: any) => {
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
        <img src={IconGithub} alt="Icon Person" />
      )}
    </div>
  );
};

export default Photo;
