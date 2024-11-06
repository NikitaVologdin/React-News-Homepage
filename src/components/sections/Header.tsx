import { useEffect, useState } from "react";
import Logo from "../../ui/Logo";
import { useLocation } from "react-router-dom";
import Backdrop from "../../ui/Backdrop";
import Nav from "../Nav";
import Burger from "../../ui/Burger";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="app__header header">
      <Logo />
      <Backdrop isMenuOpen={isMenuOpen} />
      <Nav isMenuOpen={isMenuOpen} />
      <Burger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
