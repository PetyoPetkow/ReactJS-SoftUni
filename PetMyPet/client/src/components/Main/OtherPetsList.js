import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const OtherPetsList = () => {
  const [pets, setPets] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.category != undefined && params.category != "All") {
      fetch(`http://localhost:5000/pets?category=${params.category}`)
        .then((res) => res.json())
        .then((result) => setPets(result));
    } else {
      fetch(`http://localhost:5000/pets`)
        .then((res) => res.json())
        .then((result) => setPets(result));
    }
  }, [params]);

  return (
    <>
      <ul className="other-pets-list">
        {pets &&
          pets.map((pet) => {
            return (
              <li key={pet.id} className="otherPet">
                <h3>{pet.name}</h3>
                <p>Category: {pet.category}</p>
                <p className="img">
                  <img src={pet.imageURL} />
                </p>
                <p className="description">{pet.description}</p>
                <div className="pet-info">
                  <a href="#">
                    <button className="button">
                      <i className="fas fa-heart"></i> Pet
                    </button>
                  </a>
                  <a href="#">
                    <button className="button">Details</button>
                  </a>
                  <i className="fas fa-heart"></i> <span> {pet.likes}</span>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default OtherPetsList;
