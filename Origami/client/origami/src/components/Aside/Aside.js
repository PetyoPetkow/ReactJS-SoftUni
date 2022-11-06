import Menu from "./MenuData";
import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

import style from "./Aside.module.css";

const Aside = ({ onMenuItemClick }) => {
  const [post, setPost] = useState();

  function clickHandler(x) {
    onMenuItemClick(x);
    setPost(x);
  }

  return (
    <aside className={style.aside}>
      <ul>
        {Menu.map((x) => (
          <MenuItem
            clickHandler={() => clickHandler(x.id)}
            isSelected={x.id == post}
            key={x.id}
            content={x.content}
          ></MenuItem>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
