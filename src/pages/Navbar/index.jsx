import { useState } from "react";
import Logo from "../../assets/img_svg/Logo.svg";
import { navLink } from "../../constanta/const";
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const activeHandler = (id) => setActive(id);

  return (
    <div>
      <nav className="nav">
        <a href="/" className="nav_logo">
          <img src={Logo} alt="Logo" />
        </a>

        <ul className="nav_list">
          <ul className="nav_list">
            {navLink.map((item, idx) => (
              <li
                key={idx}
                className={`nav_list__li opacity-50 ${
                  active === item.id ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => activeHandler(item.id)}
              >
                <a href={`#${item.id}`} className="nav_list__li-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </ul>

        <button className="nav_btn">Shpo now</button>
      </nav>
    </div>
  );
};

export default Navbar;
