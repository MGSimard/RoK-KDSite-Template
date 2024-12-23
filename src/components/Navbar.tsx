import { Link } from "@tanstack/react-router";
import kvks from "../data/kvkdata.json";

export function Navbar() {
  return (
    <nav>
      <div className="nav-content">
        <Link to="/">
          <img alt="Logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li className="nav-dropdown">
            <a id="nav-submenu01">SEASONS</a>
            <ul aria-labelledby="nav-submenu01">
              {Object.entries(kvks).map(([key, _], i) => (
                <li key={`${i}-${key}`}>
                  <Link to="/season/$kvk" params={{ kvk: key.toLowerCase() }}>
                    {key}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/information">INFORMATION</Link>
          </li>
          <li>
            <Link to="/migration">MIGRATION</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}