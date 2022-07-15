import "./CardSocialMedia.scss";

const CardSocialMedia = () => {
  return (
    <div className="card-social-media text-purple-200">
      <div className="social-media__location">
        <i className="fas fa-map-marker-alt"></i>
        <p>San Francisco</p>
      </div>
      <div className="social-media__twitter">
        <i className="fab fa-twitter"></i>
        <p>Not Available</p>
      </div>
      <div className="social-media__github">
        <i className="fas fa-link"></i>
        <p>https:/...</p>
      </div>
      <div className="social-media__company">
        <i className="fa-solid fa-building"></i>
        <p>github</p>
      </div>
    </div>
  );
};

export default CardSocialMedia;
