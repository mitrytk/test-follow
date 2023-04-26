import style from "./tweet.module.scss";
import { ReactComponent as BoyImg } from "../../img/Boy.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, unfollow } from "redux/operations";
import { setFollow, unsetFollow } from "redux/followSlice";
import { getIsFollow } from "redux/selectors";

import FollowButton from "components/FollowButton/FollowButton";

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const isFolow = useSelector(getIsFollow);
  const isFollowId = isFolow.map(({ user }) => Number(user.id));

  useEffect(() => {
    if (isFollowId.find((id) => id === Number(tweet.id))) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [isFollowId, tweet]);

  const formatted = (number) => {
    const stringNumber = number.toString();

    let formattedNumber;

    if (stringNumber.length >= 4 && stringNumber.length <= 6) {
      formattedNumber =
        stringNumber.slice(0, stringNumber.length - 3) +
        "," +
        stringNumber.slice(stringNumber.length - 3, stringNumber.length);
    }

    if (stringNumber.length >= 7 && stringNumber.length <= 9) {
      formattedNumber =
        stringNumber.slice(0, stringNumber.length - 6) +
        "," +
        stringNumber.slice(stringNumber.length - 6, stringNumber.length - 3) +
        "," +
        stringNumber.slice(stringNumber.length - 3, stringNumber.length);
    }

    return formattedNumber;
  };

  const handleClick = () => {
    if (!isActive) {
      dispatch(setFollow(tweet));
      dispatch(follow(tweet)).then(() => setIsActive(!isActive));
    } else {
      dispatch(unsetFollow(tweet));
      dispatch(unfollow(tweet)).then(() => setIsActive(!isActive));
    }
  };

  return (
    <article className={style.tweet}>
      <h1 className={style.tweet__title}>tweet</h1>
      <div className={style.tweet__container}>
        <div className={style.tweet__tumb}>
          <BoyImg
            className={style.tweet__boyImg}
            width={80}
            height={80}
            viewBox="5 0 80 80"
          />
          <img
            className={style.tweet__avatarImg}
            src={tweet.avatar}
            alt={tweet.user}
            width={62}
            height={62}
          />
        </div>
        <p className={style.tweet__tweet_quantity}>
          {" "}
          {`${formatted(tweet.tweets)} tweets`}
        </p>
        <p className={style.tweet__followers_quantity}>
          {" "}
          {`${formatted(tweet.followers)} followers`}
        </p>
        <FollowButton isActive={isActive} onClick={handleClick} />
      </div>
    </article>
  );
};

export default Tweet;
