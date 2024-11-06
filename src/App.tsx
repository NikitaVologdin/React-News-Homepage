import Header from "./components/sections/Header";
import Main from "./components/sections/Main";

export default function App() {
  const articles = [
    {
      img: "/images/image-retro-pcs.jpg",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      img: "/images/image-top-laptops.jpg",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      img: "/images/image-gaming-growth.jpg",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  const newArticles = [
    {
      title: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  const heroArticle = {
    img: "/images/image-web-3-mobile.jpg",
    title: "The Bright Future of Web 3.0?",
    text: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
    srcSet:
      "/images/image-web-3-mobile.jpg 300w, /images/image-web-3-desktop.jpg 1100w",
  };
  return (
    <>
      <Header />
      <Main
        articles={articles}
        newArticles={newArticles}
        heroArticle={heroArticle}
      />
    </>
  );
}
