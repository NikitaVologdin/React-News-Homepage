import Hero from "./Hero";
import New from "./New";
import Articles from "./Articles";
import {
  type ArticleT,
  type NewArticleT,
  type HeroArticleT,
} from "../../types/articles";

interface MainProps {
  articles: ArticleT[];
  newArticles: NewArticleT[];
  heroArticle: HeroArticleT;
}

export default function Main({
  articles,
  newArticles,
  heroArticle,
}: MainProps) {
  return (
    <main className="app__main main">
      <Hero heroArticle={heroArticle} />
      <New newArticles={newArticles} />
      <Articles articles={articles} />
    </main>
  );
}
