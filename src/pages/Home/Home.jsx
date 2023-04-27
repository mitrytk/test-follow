import style from "./home.module.scss";
import { ReactComponent as Img } from "../../img/picture.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={style.home__section}>
        <Img className={style.home__img} width={300} />
        <p className={style.home__text}>
          Hello! Have you seen{" "}
          <Link to="/tweets" className={style.home__text_link}>
            these
          </Link>{" "}
          tweets?
        </p>
      </section>
    </>
  );
};

export default Home;
