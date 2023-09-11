import React from "react";
import { Vid, View, kvadrat, ptichka, brat } from "../../assets/img_png/index";
import { Vector } from "../../assets/img_svg/index";
import "./index.scss";

const About = () => {
  return (
    <div id="about" className="wrapper">
      <section className="about">
        <div className="about_wrapper">
          <img className="about_wrapper__view" src={View} alt="View" />
          <img src={Vid} alt="Vid" className="about_wrapper__img" />
        </div>
        <div className="about_wrap">
          <h2 className="about_wrap__title">Telling your story with videos</h2>
          <p className="about_wrap__text">
            Now that you have a ready strategy to move forward, it’s time to
            come up with some ideas.
          </p>
        </div>

        <div className="about_divone">
          <img className="about_divone__view" src={kvadrat} alt="View" />
          <img
            src={ptichka}
            width={"500px"}
            height={"400px"}
            alt="Vid"
            className="about_divone__img"
          />
        </div>
        <div className="about_divtwo">
          <img className="about_divtwo__brat" src={brat} alt="btar" />
          <div className="about_divtwo__wrap">
            <h2 className="about_divtwo__wrap-title">
              The best shoes for the best people.
            </h2>
            <span className="about_divtwo__wrap-span">
              <img src={Vector} alt="Vekrtot" />
              <p className="about_divtwo__wrap-span--text">
                Now that you have a ready strategy to move forward, it’s time to
                come up with some ideas.
              </p>
            </span>

            <span className="about_divtwo__wrap-span">
              <img src={Vector} alt="Vekrtot" />
              <p className="about_divtwo__wrap-span--text">
                Now that you have a ready strategy to move forward, it’s time to
                come up with some ideas.
              </p>
            </span>

            <span className="about_divtwo__wrap-span">
              <img src={Vector} alt="Vekrtot" />
              <p className="about_divtwo__wrap-span--text">
                Now that you have a ready strategy to move forward, it’s time to
                come up with some ideas.
              </p>
            </span>

            <span className="about_divtwo__wrap-span">
              <img src={Vector} alt="Vekrtot" />
              <p className="about_divtwo__wrap-span--text">
                Now that you have a ready strategy to move forward, it’s time to
                come up with some ideas.
              </p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
