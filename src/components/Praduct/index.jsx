import Booton from "../../UI/Btns";
import { product } from "../../constanta/const";
import "./index.scss";

const Product = () => {
  return (
    <div className="wrapper_one">
      <section className="product">
        <h1 id="product" className="product_title">
          Our Latest Product
        </h1>
        <p className="product_text">
          Now that you have a ready strategy to move forward, it’s time to come
          up with some ideas.
        </p>
        <div className="product_wrapper">
          {product.map((item) => (
            <div key={item.id} className="product_wrapper__wrap">
              <div className="product_wrapper__wrap-div">
                <img src={item.img} alt={item.id} />
              </div>
              <h3 className="product_wrapper__wrap-title">{item.title}</h3>
              <img src={item.star} alt={item.id} />
              <p className="product_wrapper__wrap-text">{item.prise}</p>
              <Booton companenta={"Shpo now"} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
