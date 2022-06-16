import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteNames } from "../../types/routes";
import HomePage from "../HomePage";
import NotFoundPage from "../NotFoundPage";
import RegisterPage from "../RegisterPage";
import LoginPage from "../LoginPage";
import RequireAuth from "../../components/Auth/RequireAuth";
import Character from "../../components/Character";
import "../../styles/App.scss";
import LikedPage from "../LikedPage";

function App() {
  return (
    <Routes>
      <Route path={RouteNames.LOGIN} element={<LoginPage />} />
      <Route path={RouteNames.REGISTRATION} element={<RegisterPage />} />
      <Route
        path={RouteNames.HOME_PAGE}
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      >
        <Route path={RouteNames.LIKED} element={<LikedPage />} />
        <Route path={RouteNames.CHARACTER} element={<Character />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
