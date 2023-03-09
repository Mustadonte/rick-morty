export const ItemInfo = ({ character }) => {
  const { image, name, gender, status, origin, species, type } = character;

  return (
    <>
      <img className="character__avatar" src={image} alt={`${name} image`} />
      <div className="character__info">
        <p className="character__name">{name}</p>
        <p className="character__info--label">Informations</p>
        <ul className="character__list">
          <li className="character__listItem">
            <p className="character__info--heading ">Gender:</p>
            <p className="character__info--text">{gender}</p>
          </li>
          <li className="character__listItem">
            <p className="character__info--heading ">Status:</p>
            <p className="character__info--text">{status}</p>
          </li>
          <li className="character__listItem">
            <p className="character__info--heading ">Specie:</p>
            <p className="character__info--text">{species}</p>
          </li>
          <li className="character__listItem">
            <p className="character__info--heading ">Origin:</p>
            <p className="character__info--text">{origin.name}</p>
          </li>
          <li className="character__listItem">
            <p className="character__info--heading ">Origin</p>
            <p className="character__info--text ">{type ? type : "Unknown"}</p>
          </li>
        </ul>
      </div>
    </>
  );
};
