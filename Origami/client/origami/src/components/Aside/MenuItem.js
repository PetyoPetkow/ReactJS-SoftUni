import style from "./Aside.module.css";

export default function MenuItem({ clickHandler, isSelected, content }) {
  return !isSelected ? (
    <li onClick={clickHandler} className={style.listItem}>
      <a href="#">{content}</a>
    </li>
  ) : (
    <li
      onClick={clickHandler}
      className={`${style.listItem} ${style.selected}`}
    >
      <a href="#">{content}</a>
    </li>
  );
}
