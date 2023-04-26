import style from "./tweet.module.scss";
import { ReactComponent as BoyImg } from "../../img/Boy.svg";
import { useState } from "react";

import FollowButton from "components/FollowButton/FollowButton";

const Tweet = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
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
        </div>
        <p className={style.tweet__tweet_quantity}> 777 tweets</p>
        <p className={style.tweet__followers_quantity}> 100,500 followers</p>
        <FollowButton isActive={isActive} onClick={handleClick} />
      </div>
    </article>
  );
};

export default Tweet;
