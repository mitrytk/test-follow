import style from "./followButton.module.scss";
import clsx from "clsx";

const FollowButton = ({ isActive, onClick }) => {
  return (
    <>
      <button
        className={clsx(style.button, isActive && style.active)}
        type="button"
        onClick={onClick}
      >
        Follow
      </button>
    </>
  );
};

export default FollowButton;
