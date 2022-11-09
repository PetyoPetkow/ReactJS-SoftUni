import { useParams } from "react-router-dom";

import origamiData from "../../constants/origamiData";

const Origami = () => {
  const { id } = useParams();

  const origamiToShow = origamiData.find((singleOrigami) => {
    return singleOrigami.id === id;
  });

  console.log(origamiToShow);

  const { idO, title, description } = origamiToShow;

  return (
    <div>
      <h2>{origamiToShow.title}</h2>
      <p>{origamiToShow.description}</p>
    </div>
  );
};

export default Origami;
