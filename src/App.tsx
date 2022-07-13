import "./App.scss";
import { Header } from "./components/Header";
import { ContainerUser } from "./components/ContainerUser";

const App = () => {
  return (
    <section className="github-user">
      <Header />
      <ContainerUser />
    </section>
  );
};

export default App;