import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "../../assets/arrow_back.svg";
import { getCharacterById } from "../../API/service";
import { ItemInfo } from "./ItemInfo";

export const Character = () => {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    (async () => {
      const data = await getCharacterById(characterId);
      setCharacter(data);
    })();
  }, []);
  const { image, name, gender, status, origin, species, type } = character;

  return (
    <div className="character__container">
      <button
        className="character__button"
        type="button"
        onClick={() => navigate(-1)}
      >
        <img src={arrow} alt="arrow back" />
        GO BACK
      </button>

      {origin && <ItemInfo character={character} />}
    </div>
  );
};
