import "./CardUserNames.scss";
import Skeleton from "./Skeleton";
import { UserNames } from "@/interfaces/components";
import { getFormatDate } from "@/utils";

const CardUserNames = ({ isLoading, name, username, createdAt }: UserNames) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div className="card-user-names">
      <div style={{ width: "100%" }}>
        <h1 className="card-user-names__name">{name ?? "No name"}</h1>
        <p className="card-user-names__username text-primary">
          {username ? "@" + username : "No username"}
        </p>
      </div>
      <p className="card-user-names__joined text-gray-300">
        {typeof createdAt !== "string"
          ? "Joined " + getFormatDate(createdAt ?? "")
          : "-"}
      </p>
    </div>
  );
};

export default CardUserNames;
