import "./GithubUser.scss";
import { Header } from "./components/Header";
import { ContainerUser } from "./components/ContainerUser";

const GithubUser = () => {
  return (
    <section className="github-user">
      <Header />
      <ContainerUser />
    </section>
  );
};

export default GithubUser;
