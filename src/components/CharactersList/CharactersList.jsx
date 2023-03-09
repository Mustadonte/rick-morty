import { Link } from "react-router-dom";

export const CharactersList = ({ list }) => {
  return (
    <ul className="charactersList">
      {list ? (
        list
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ image, name, species, id }) => {
            return (
              <li key={id} className="charactersList__item">
                <Link to={`/${id}`}>
                  <img
                    className="charactersList__img"
                    src={image}
                    alt="Character name"
                  />
                  <div className="characterList__label">
                    <p className="characterList__name">{name}</p>
                    <p className="characterList__species">{species}</p>
                  </div>
                </Link>
              </li>
            );
          })
      ) : (
        <p>There is no such character</p>
      )}
    </ul>
  );
};
