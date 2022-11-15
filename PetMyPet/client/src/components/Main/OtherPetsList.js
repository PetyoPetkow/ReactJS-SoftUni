import { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";

import * as OtherPetsService from "../../services/OtherPetsService";

const OtherPetsList = () => {
  const [pets, setPets] = useState([]);
  const params = useParams();
  let petsToShow = pets;

  console.log(petsToShow);

  useEffect(() => {
    OtherPetsService.getAll().then((result) => setPets(result));
    petsToShow = pets;
  }, []);

  if (params.category != undefined && params.category != "All") {
    petsToShow = pets.filter((pet) => {
      return pet.category === params.category;
    });
  }
  console.log(petsToShow);
  return (
    <>
      <ul className="other-pets-list">
        {petsToShow &&
          petsToShow.map((pet) => {
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
