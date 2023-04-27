import style from "./tweets.module.scss";
import Tweet from "components/Tweet/Tweet";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "redux/operations";
import { getTweets } from "redux/selectors";
import { useNavigate } from "react-router-dom";

const Tweets = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);

  const tweets = useSelector(getTweets);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handlerClick = (e) => {
    navigate("/");
  };

  const currentTweets = () => {
    const numberOfDownloaded = page * 3;
    return tweets.slice(0, numberOfDownloaded);
  };
  const handlerLoadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    setShowBtn(page < Math.ceil(tweets.length / 12));
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
          {currentTweets().map((tweet) => {
            return <Tweet key={tweet.id} tweet={tweet} />;
          })}
        </div>
        {showBtn && (
          <button
            className={style.tweets__buttom_more}
            onClick={handlerLoadMore}
          >
            Load More
          </button>
        )}
      </section>
    </>
  );
};

export default Tweets;
