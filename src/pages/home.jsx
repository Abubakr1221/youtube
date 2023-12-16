import Header from "../components/header/header";
import Wrapper from "../components/wrapper/wrapper";
import MoviesProvide from "../contexts/movie-context";

const Home = () => {
  return (
    <>
      <MoviesProvide>
        <Header />
        <Wrapper />
      </MoviesProvide>
    </>
  );
};

export default Home;
