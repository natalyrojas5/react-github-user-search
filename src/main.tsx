import "./styles/base/resets.scss";
import "./styles/global/elements/main.scss";
import "./styles/global/classes/main.scss";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import GithubUser from "./GithubUser";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GithubUser />
  </StrictMode>
);
