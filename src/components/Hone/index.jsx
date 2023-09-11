import foiz from "../../assets/img_svg/foiz.svg";
import krasofka from "../../assets/img_png/krasofka.png";
import { krasofkaImg } from "../../constanta/const";
import img from "../../assets/img_png/img.png";
import { nike } from "../../assets/img_svg/index";
import Button from "../../UI/Btns";
import "./index.scss";

const Home = () => {
  return (
    <div>
      <section id="home" className="home">
        <div className="home_wrapper">
          <div className="home_wrapper__div">
            <p className="home_wrapper__div--text">
              Bring power to your steps.
            </p>
            <img src={nike} alt="nike" />
          </div>
          <h1 className="home_wrapper__title">Walk the line.</h1>
          <p className="home_wrapper__desc">
            Now that you have a ready strategy to move forward, it’s time to
            come up with some ideas.
          </p>

          <p className="home_wrapper__text">
            Now that you have a
            <span className="home_wrapper__text-span"> ready strategy </span>
            to move forward,
          </p>

          <p className="home_wrapper__prise">
            Price : $125
            <span className="home_wrapper__prise-old"> $169 </span>
          </p>

          <div className="home_wrapper__button">
            <Button companenta={"Shpo now"} />
            <Button companenta={"Learn More"} />
          </div>

          <div className="home_wrapper__korish">
            <span className="home_wrapper__korish--span">
              <p className="home_wrapper__korish--span-one">70k</p>
              <p className="home_wrapper__korish--span-two">CUSTOMERS</p>
            </span>
            <span className="home_wrapper__korish--span">
              <p className="home_wrapper__korish--span-one">17k</p>
              <p className="home_wrapper__korish--span-two">REVIEW</p>
            </span>
          </div>
        </div>

        <div className="home_wrap">
          <img className="home_wrap__foiz" src={foiz} alt="foiz" />
          <img className="home_wrap__krasofka" src={krasofka} alt="krasofka" />
          <div className="home_wrap__div">
            {krasofkaImg.map((item) => (
              <button key={item.id} className="home_wrap__div-btn">
                <img src={img} alt={item.id} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
