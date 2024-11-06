import { type ArticleT } from "../../types/articles";

interface ArticleItemProps {
  img: string;
  index: string;
  title: string;
  text: string;
}

interface ArticlesProps {
  articles: ArticleT[];
}

function ArticlesItem({ img, index, title, text }: ArticleItemProps) {
  return (
    <article className="articles__article-item article-item">
      <img
        src={img}
        width={100}
        height={129}
        alt="Shows old PC"
        className="article-item__img"
      />
      <div>
        <header>
          <span className="article-item__index">{index}</span>
          <h4 className="article-item__title">{title}</h4>
        </header>
        <p className="article-item__paragraph">{text}</p>
      </div>
    </article>
  );
}

export default function Articles({ articles }: ArticlesProps) {
  return (
    <section className="main__articles articles">
      {articles.map((a, index) => {
        return (
          <ArticlesItem
            img={a.img}
            index={"0" + (index + 1)}
            title={a.title}
            text={a.text}
            key={Math.random()}
          />
        );
      })}
    </section>
  );
}
