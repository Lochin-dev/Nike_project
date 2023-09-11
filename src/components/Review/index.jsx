import "./index.scss";

import { kvpng, yil } from "../../assets/img_png/index";
import { left, right, img_brat, stars } from "../../assets/img_svg/index";
import Button from "../../UI/Btns/index";

const Review = () => {
  return (
    <div>
      <section id="review" className="review">
        <div className="review_divone">
          <img className="review_divone__bg1" src={kvpng} alt="bg" />
          <img className="review_divone__bg2" src={yil} alt="bg" />
        </div>

        <div
          style={{
            display: "flex",
            gap: "77px",
            zIndex: "20",
            padding: "190px 0",
            alignItems: "center",
          }}
          className="reviev_divtwo"
        >
          <div className="review_divtwo__wrapper">
            <span className="review_divtwo__wrapper-span">
              <img src={left} alt="left" />
              <img
                style={{ transform: " rotate(180deg)" }}
                src={right}
                alt="right"
              />
            </span>
            <Button companenta={"More Reciew"} />
            <div className="review_divtwo__wrapper-div">
              <div className="review_divtwo__wrapper-div--span"></div>
              <div className="review_divtwo__wrapper-div--span"></div>
              <div className="review_divtwo__wrapper-div--span"></div>
            </div>
          </div>
          <div className="review_divtwo__wrap">
            <h3 className="review_divtwo__wrap-title">Greatest Reviews</h3>
            <div className="review_divtwo__wrap-div">
              <img src={img_brat} alt="img_brat" />
              <div className="review_divtwo__wrap-div--profil">
                <h3 className="review_divtwo__wrap-div--profil_title">
                  Shahriar Sohag
                </h3>
                <p className="review_divtwo__wrap-div--profil_text">
                  Now that you have a ready strategy to move forward, it’s time
                  to come up with some ideas.
                </p>

                <span className="review_divtwo__wrap-div--profil_span">
                  <img src={stars} alt="stars" />
                  <p className="review_divtwo__wrap-div--profil_span__title">
                    UI Designer
                  </p>
                </span>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
