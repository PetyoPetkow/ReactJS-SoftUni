import style from "./Header.module.css";

const Header = () => {
  return (
    <header id={style["site-header"]}>
      <nav className={style.navbar}>
        <section className={style["navbar-dashboard"]}>
          <div className={style["first-bar"]}>
            <a href="#">Dashboard</a>
            <a className={style.button} href="#">
              My Pets
            </a>
            <a className={style.button} href="#">
              Add Pet
            </a>
          </div>
          <div className={style["second-bar"]}>
            <ul>
              <li>Welcome, Pesho!</li>
              <li>
                <a href="#">
                  <i className={`${style.fas} ${style["fa-sign-out-alt"]}`}></i>{" "}
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className={style["navbar-anonymous"]}>
          <ul>
            <li>
              <a href="#">
                <i className={`${style.fas} ${style["fa-user-plus"]}`}></i>{" "}
                Register
              </a>
            </li>
            <li>
              <a href="#">
                <i className={`${style.fas} ${style["fa-sign-in-alt"]}`}></i>{" "}
                Login
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Header;
