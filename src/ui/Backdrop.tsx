interface props {
  isMenuOpen: boolean;
}

export default function Backdrop({ isMenuOpen }: props) {
  return (
    <div
      className={`header__backdrop backdrop ${
        isMenuOpen ? "backdrop_open" : ""
      }`}
    ></div>
  );
}
