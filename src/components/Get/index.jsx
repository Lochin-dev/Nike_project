import Booton from "../../UI/Btns";
import "./index.scss";

const Get = () => {
  return (
    <section className="get">
      <h1 className="get_title">Get Started Now</h1>
      <p className="get_text">
        Now that you have a ready strategy to move forward, it’s time to come up
        with some ideas.
      </p>
      <Booton companenta={"SUBESCRIBE"} />
    </section>
  );
};

export default Get;
