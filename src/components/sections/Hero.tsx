import { type HeroArticleT } from "../../types/articles";

interface HeroArticleProps {
  heroArticle: HeroArticleT;
}

export default function Hero({ heroArticle }: HeroArticleProps) {
  return (
    <section className="main__hero hero">
      <img
        src={heroArticle.img}
        className="hero__img"
        width="343"
        height="300"
        alt=""
        srcSet={heroArticle.srcSet}
        sizes={heroArticle.sizes}
      />
      <h1 className="hero__title">{heroArticle.title}</h1>
      <div className="hero__paragraph-group">
        <p className="hero__paragraph">{heroArticle.text}</p>
        <button className="hero__read-more read-more">read more</button>
      </div>
    </section>
  );
}
