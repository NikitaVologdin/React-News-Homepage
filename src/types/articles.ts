export interface ArticleT {
  img: string;
  index?: number;
  title: string;
  text: string;
}
export interface NewArticleT {
  title: string;
  text: string;
}
export interface HeroArticleT extends NewArticleT {
  img: string;
  srcSet: string;
  sizes: string;
}
