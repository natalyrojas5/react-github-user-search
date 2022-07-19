import { SkeletonElement } from "../../components/Skeleton";
import { IconGithub } from "../../assets/icons";
import "./Photo.scss";

const Photo = (isLoading: any) => {
  return (
    <div className="photo">
      {isLoading ? (
        <SkeletonElement
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
