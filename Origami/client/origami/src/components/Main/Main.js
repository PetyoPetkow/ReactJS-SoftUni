import style from "./Main.module.css";

const Main = ({ posts }) => {
  return (
    <main className={style.main}>
      <h1>Soooooooooooooooome Heading</h1>
      <div className={style.posts}>
        {posts.map((post) => (
          <div key={post.id} className={style.post}>
            <img src="blue-origami-bird-flipped.png" alt="origami"></img>
            <p className={style.description}>{post.content}</p>
            <div>
              <span>
                <small>{post.author}</small>
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
