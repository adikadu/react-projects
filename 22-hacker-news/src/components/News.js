import classes from "./News.module.css";
import NewsCard from "./NewsCard";
import Loading from "./Loading";
import { useContext } from "react";
import store from "../store/store";

export default function News() {
  const ctx = useContext(store);
  if (ctx.isLoading) return <Loading />;
  return (
    <div className={classes["news-cards"]}>
      {ctx.news.map((item) => (
        <NewsCard
          key={item.objectID}
          id={item.objectID}
          title={item.title}
          points={item.points}
          author={item.author}
          numComments={item.num_comments}
          readMoreLink={item.url}
        />
      ))}
    </div>
  );
}
