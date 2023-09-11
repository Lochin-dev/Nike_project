import Logo from "../../assets/img_svg/Logo.svg";
import { navLink, footerLink } from "../../constanta/const";
import "./index.scss";

const Footer = () => {
  return (
    <div className="">
      <hr />
      <footer className="footer">
        <a href="/" className="footer_logo">
          <img src={Logo} alt="Logo" />
        </a>

        <ul className="footer_list">
          {navLink.map((item, idx) => (
            <li key={idx} className="footer_list__li">
              <a href={`#${item.id}`} className="footer_list__li-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer_wrap">
          <p className="footer_wrap__text">Follow Us :</p>
          <div className="footer_wrap__div">
            {footerLink.map((item) => (
              <button key={item.id} className="footer_wrap__div-btn">
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="footer_wrap__div-btn--link"
                >
                  <img src={item.img} alt={item.id} />
                </a>
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
