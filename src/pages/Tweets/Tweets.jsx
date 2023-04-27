import style from "./tweets.module.scss";
import Tweet from "components/Tweet/Tweet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "redux/operations";
import { getTweets } from "redux/selectors";

const Tweets = () => {
  const tweets = useSelector(getTweets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  if (!tweets) {
    return <div>Loading</div>;
  }
  return (
    <>
      <section className={style.tweets__section}>
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
