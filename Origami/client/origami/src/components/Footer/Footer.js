import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul>
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
        <img src="blue-origami-bird.png"></img>
      </ul>
      <p>Software University &copy; 2019</p>
    </footer>
  );
};

export default Footer;
