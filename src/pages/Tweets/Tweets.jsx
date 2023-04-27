import style from "./tweets.module.scss";
import Tweet from "components/Tweet/Tweet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "redux/operations";
import { getTweets } from "redux/selectors";
import { useNavigate } from "react-router-dom";

const Tweets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tweets = useSelector(getTweets);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handlerClick = (e) => {
    navigate("/");
  };
  return (
    <>
      <section className={style.tweets__section}>
        <button
          className={style.tweets__back_button}
          onClick={(e) => handlerClick(e)}
        >
          Back
        </button>
        <div className={style.tweets__container}>
          {tweets.map((tweet) => {
            return <Tweet key={tweet.id} tweet={tweet} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tweets;
