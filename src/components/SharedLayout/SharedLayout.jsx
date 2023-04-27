import style from "./sharedLayout.module.scss";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import BurgerButton from "components/BurgerButton/BurgerButton";

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    blockScroll();
  };

  const blockScroll = () => {
    const bodyEl = document.querySelector("body");
    const displayWith = window.innerWidth;

    if (displayWith < 768) {
      bodyEl.classList.toggle("block_scroll");
    }
  };
  return (
    <>
      <header className={style.header}>
        <BurgerButton isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        <div
          className={clsx(style.container, !isMenuOpen && style.hide)}
          onClick={toggleMenu}
        >
          <nav className={style.navigation}>
            {" "}
            <NavLink to="/" className={style.link}>
              Home
            </NavLink>
            <NavLink to="tweets" className={style.link}>
              Tweets
            </NavLink>
          </nav>
        </div>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
