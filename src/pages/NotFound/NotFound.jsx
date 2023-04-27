import style from "./notFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className={style.error}>
        <div className={style.error__text}>Ooops... Page is not found</div>
        <Link className={style.error__link} to="/">
          Home?
        </Link>
      </section>
    </>
  );
};

export default NotFound;
