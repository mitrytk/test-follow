import style from "./sharedLayout.module.scss";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header className={style.header}>
        <nav>
          {" "}
          <NavLink to="/">Home</NavLink>
          <NavLink to="tweets">Tweets</NavLink>
        </nav>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
