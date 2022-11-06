import style from "./Header.module.css";

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <img src="white-origami-bird.png"></img>

        <li className={style.listItem}>
          <a href="#">Going to 1</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 2</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 3</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 4</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 5</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 6</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 7</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 8</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 9</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 10</a>
        </li>
        <li className={style.listItem}>
          <a href="#">Going to 11</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
