import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const onSuccess = ({ credential }) => {
    localStorage.setItem("token", JSON.stringify(true));

    navigate("/");
    return;
  };

  return (
    <>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </>
  );
};
