import { WrapperSkeleton } from "../../wrappers/Skeleton";

const wrapper_styles = {
  width: "100%",
};

const skeleton_styles = {
  width: "100%",
  height: "1.8rem",
};

const SkeletonElement = ({
  wrapperStyles = wrapper_styles,
  skeletonStyles = skeleton_styles,
}: any) => {
  return (
    <WrapperSkeleton styles={wrapperStyles}>
      <div className="skeleton" style={skeletonStyles}></div>
    </WrapperSkeleton>
  );
};

export default SkeletonElement;
