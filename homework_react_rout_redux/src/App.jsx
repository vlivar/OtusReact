import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { NavigationBar } from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import NotFoundPage from "./components/NotFoundPage";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}