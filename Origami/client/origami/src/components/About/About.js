import style from "./About.module.css";

const About = ({ history, location, match }) => {
  console.log(match);
  return (
    <div className={style.about}>
      <h1 className={style.h1}>About</h1>
    </div>
  );
};

export default About;
