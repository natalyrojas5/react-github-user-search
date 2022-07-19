import "./WrapperSkeleton.scss";

const WrapperSkeleton = ({ children, styles }: any) => {
  return (
    <div className="skeleton-wrapper border-r-06" style={styles}>
      {children}
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};
export default WrapperSkeleton;
