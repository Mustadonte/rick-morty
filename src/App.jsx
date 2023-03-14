import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { Home } from "./Pages/Home";
import { Character } from "./components/Character/Character";
import { LoginPage } from "./Pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/:characterId" element={<Character />} />
      </Route>
    </Routes>
  );
};

export default App;
