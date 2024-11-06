import { NewArticleT } from "../../types/articles";

interface NewArticlesProps {
  newArticles: NewArticleT[];
}

function NewArticleItem({ title, text }: NewArticleT) {
  return (
    <article className="new__article new-article">
      <header>
        <h3 className="new-article__title">{title}</h3>
      </header>
      <p className="new-article__paragraph">{text}</p>
    </article>
  );
}

export default function New({ newArticles }: NewArticlesProps) {
  return (
    <section className="main__new new">
      <h2 className="new__title">New</h2>
      {newArticles.map((a, index) => {
        return (
          <div key={Math.random()}>
            <NewArticleItem title={a.title} text={a.text} />
            {index < newArticles.length - 1 ? (
              <div className="new-article__hr" />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </section>
  );
}
