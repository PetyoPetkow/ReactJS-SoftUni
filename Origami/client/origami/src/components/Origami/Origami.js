import { useParams } from "react-router-dom";

import origamiData from "../../constants/origamiData";
import NotFound from "../NotFound/NotFound";

const Origami = () => {
  const { id } = useParams();

  const origamiToShow = origamiData.find((singleOrigami) => {
    return singleOrigami.id === id;
  });

  console.log(origamiToShow);

  if (origamiToShow) {
    const { title, description } = origamiToShow;

    return (
      <div>
        <h2>{origamiToShow.title}</h2>
        <p>{origamiToShow.description}</p>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Origami;
