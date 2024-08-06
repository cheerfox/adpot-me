import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  // details 是 cache key
  const results = useQuery(["details", id], fetchPet);

  // 利用 short curcit 的方式簡化程式流程
  if (results.isError) {
    return <h2>oh no</h2>
  }

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h2>{pet.name}</h2>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, ${pet.state}</h2>
        <button type="button">Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;
