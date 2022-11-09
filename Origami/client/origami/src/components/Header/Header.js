import style from "./Header.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <img src="white-origami-bird.png"></img>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/first">About first</Link>
        </li>
        <li>
          <Link to="/about/second">About second</Link>
        </li>
        <li>
          <Link to="/origami">Origami</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
