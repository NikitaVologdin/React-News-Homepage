import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
interface props {
  isMenuOpen: boolean;
}

export default function Nav({ isMenuOpen }: props) {
  const firstElementRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      const timeOutId = setTimeout(() => {
        firstElementRef.current?.focus();
      }, 1000);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={`header__nav nav ${isMenuOpen === true ? "nav_open" : ""}`}
      aria-hidden={!isMenuOpen}
    >
      <ul className="nav__list nav-list">
        <li>
          <Link
            to="/"
            className="nav-list__item"
            tabIndex={isMenuOpen ? 0 : -1}
            ref={firstElementRef}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/new"
            className="nav-list__item"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            new
          </Link>
        </li>
        <li>
          <Link
            to="/popular"
            className="nav-list__item"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            popular
          </Link>
        </li>
        <li>
          <Link
            to="/trending"
            className="nav-list__item"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            trending
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className="nav-list__item"
            tabIndex={isMenuOpen ? 0 : -1}
          >
            categories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
