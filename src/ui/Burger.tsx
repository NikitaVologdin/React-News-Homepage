interface burgerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
}

export default function Burger({ isMenuOpen, setIsMenuOpen }: burgerProps) {
  function clickHandler() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <button
      className="header__burger burger"
      onClick={clickHandler}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      <span
        className={`burger__line ${
          isMenuOpen === true ? "burger__line_first_open" : ""
        }`}
      ></span>
      <span
        className={`burger__line ${
          isMenuOpen === true ? "burger__line_second_closed" : ""
        }`}
      ></span>
      <span
        className={`burger__line ${
          isMenuOpen === true ? "burger__line_none" : ""
        }`}
      ></span>
    </button>
  );
}
