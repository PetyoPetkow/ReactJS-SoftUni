import { Outlet, Link } from "react-router-dom";

import style from "./Origami.module.css";

const OrigamiLayout = () => {
  return (
    <div className={style.origamiContainer}>
      <Link className={style.link} to="/origami/1">
        Origami 1
      </Link>
      <Link className={style.link} to="/origami/2">
        Origami 2
      </Link>
      <Link className={style.link} to="/origami/3">
        Origami 3
      </Link>

      <Outlet />
    </div>
  );
};

export default OrigamiLayout;
