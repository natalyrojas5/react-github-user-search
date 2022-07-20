import { WrapperSkeleton } from "../../wrappers/Skeleton";
import styles from "./styles";

const SkeletonElement = ({
  wrapperStyles = styles.wrapper,
  skeletonStyles = styles.skeleton,
}: any) => {
  return (
    <WrapperSkeleton styles={wrapperStyles}>
      <div className="skeleton" style={skeletonStyles}></div>
    </WrapperSkeleton>
  );
};

export default SkeletonElement;
