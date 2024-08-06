// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breeds)
//   ]);
// };

import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

// 一個檔案只能有一個 export default
// 但可以有很多具名匯出
export default Pet;
