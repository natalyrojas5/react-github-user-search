import styles from "./styles";

import { WrapperSkeleton } from "@/wrappers/Skeleton";

const Skeleton = ({
  wrapperStyles = styles.wrapper,
  skeletonStyles = styles.skeleton,
}: any) => {
  return (
    <WrapperSkeleton styles={wrapperStyles}>
      <div className="skeleton" style={skeletonStyles}></div>
    </WrapperSkeleton>
  );
};

export default Skeleton;
