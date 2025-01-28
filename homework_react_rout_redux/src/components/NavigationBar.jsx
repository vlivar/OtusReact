import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "active-route" : "";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"login"}
            className={({ isActive }) => {
              return isActive ? "active-route" : "";
            }}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"register"}
            className={({ isActive }) => {
              return isActive ? "active-route" : "";
            }}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};