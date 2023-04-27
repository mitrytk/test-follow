import style from "./followButton.module.scss";
import clsx from "clsx";
import { getIsLoading } from "redux/selectors";
import { useSelector } from "react-redux";

const FollowButton = ({ isActive, onClick }) => {
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <button
        className={clsx(style.button, isActive && style.active)}
        type="button"
        onClick={onClick}
        disabled={isLoading}
      >
        Follow
      </button>
    </>
  );
};

export default FollowButton;
