import React, { useState } from "react";
import db from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Loading from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, storeCart } from "../../features/cart/cart";

const DryFruits = () => {
  const [dryFruits, loading, error] = useCollection(db.collection("dryfruits"));
  const dispatch = useDispatch();

  const storedCartItems = useSelector(storeCart);
  const [isCartItem, setIsCartItem] = useState(false);

  const handleAddToCart = (dryFruit) => {
    let inCart = false;
    let newItem = dryFruit;
    console.log(dryFruit);
    dispatch(
      addToCart({
        newItem,
      })
    );
  };

  return (
    <React.Fragment>
      <br />
      {loading ? <Loading /> : ""}
      <div className="container">
        <div className="grid justify-content-center row">
          {dryFruits &&
            dryFruits.docs.map((dryFruit) => (
              <div
                // className="col-sm-6 col-md-4 col-lg-3"
                className="col-12 col-md-6 col-xl-4 d-flex"
                key={dryFruit.data().img}
              >
                <article className="entity-block entity-hover-shadow bg-white text-center">
                  <div className="my-3 entity-image">
                    <div className="embed-responsive embed-responsive-4by3">
                      <img
                        className="embed-responsive-item"
                        src={dryFruit.data().img}
                        style={{ cursor: "pointer" }}
                        // src="/images/indian-yellow-raisin-.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="entity-bg"
                    style={{
                      background: `#${dryFruit.data().bgColor}`,
                      borderRadius: "0.5rem",
                    }}
                  ></div>
                  <div className="pt-0 entity-content">
                    <h4 className="entity-title">
                      <div
                        className="content-link"
                        style={{ color: "#000", cursor: "pointer" }}
                      >
                        {dryFruit.data().name}
                      </div>
                    </h4>
                    <p className="entity-title" style={{ color: "#000" }}>
                      {dryFruit.data().desc}
                    </p>
                    <div className="entity-price" style={{ color: "#000" }}>
                      <span
                        className="currency"
                        style={{
                          color: "#000",
                          textDecoration: "line-through",
                        }}
                      >
                        Rs. {dryFruit.data().actual_price}
                      </span>
                      <span
                        className="price-unit"
                        // style={{ textDecoration: "line-through" }}
                      >
                        / {dryFruit.data().gms} gms
                      </span>
                      <br />
                      <span className="currency">Rs.</span>
                      {dryFruit.data().price}
                    </div>
                    <div className="mt-4 entity-action-btns">
                      <button
                        className="btn-wide btn btn-theme"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleAddToCart(dryFruit.data())}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DryFruits;
