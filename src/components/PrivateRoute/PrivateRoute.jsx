import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, []);

  return <Outlet />;
};
