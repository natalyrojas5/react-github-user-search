import { SkeletonElement } from "../../components/Skeleton";
import "./CardSocialMedia.scss";

const CardSocialMedia = (isLoading: any) => {
  return (
    <div className="card-social-media text-purple-200">
      <div className="social-media__location">
        <i className="fas fa-map-marker-alt "></i>
        {isLoading ? (
          <SkeletonElement wrapperStyles={{ height: "1.2rem" }} />
        ) : (
          <p>San Francisco</p>
        )}
      </div>
      <div className="social-media__twitter">
        <i className="fab fa-twitter"></i>
        {isLoading ? (
          <SkeletonElement wrapperStyles={{ height: "1.2rem" }} />
        ) : (
          <p>Not Available</p>
        )}
      </div>
      <div className="social-media__github">
        <i className="fas fa-link"></i>
        {isLoading ? (
          <SkeletonElement wrapperStyles={{ height: "1.2rem" }} />
        ) : (
          <p>https:/...</p>
        )}
      </div>
      <div className="social-media__company">
        <i className="fa-solid fa-building"></i>
        {isLoading ? (
          <SkeletonElement wrapperStyles={{ height: "1.2rem" }} />
        ) : (
          <p>github</p>
        )}
      </div>
    </div>
  );
};

export default CardSocialMedia;
