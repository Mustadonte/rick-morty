import logoImg from "../../img/logo.png";
export const Logo = () => {
  return (
    <div className="logo">
      <a href="/rick-morty/">
        <img className="logo__img" src={logoImg} alt="Rick and Morty logo" />
      </a>
    </div>
  );
};
