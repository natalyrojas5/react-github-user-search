import { SkeletonElement } from "../../components/Skeleton";

const Skeleton = () => {
  return (
    <div className="card-user-names">
      <div style={{ width: "100%" }}>
        <div className="card-user-names__name">
          <SkeletonElement wrapperStyles={{ maxWidth: "14rem" }} />
        </div>
        <div className="card-user-names__username">
          <SkeletonElement
            wrapperStyles={{ maxWidth: "10rem", height: "1.2rem" }}
          />
        </div>
      </div>
      <div style={{ width: "100%" }} className="card-user-names__joined">
        <SkeletonElement wrapperStyles={{ maxWidth: "12rem", width: "100%" }} />
      </div>
    </div>
  );
};

export default Skeleton;
