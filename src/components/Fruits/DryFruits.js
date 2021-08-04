import React, { useEffect } from "react";
import db from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const DryFruits = () => {
  const [dryFruits, loading, error] = useCollection(db.collection("dryfruits"));

  useEffect(() => {
    if (loading) {
      console.log(loading);
    }
  }, []);

  return (
    <React.Fragment>
      <br />
      <div className="container">
        <div className="grid justify-content-center row">
          {dryFruits &&
            dryFruits.docs.map((dryFruit) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={dryFruit}>
                <article className="entity-block entity-hover-shadow bg-white text-center">
                  <div className="my-3 entity-image">
                    <div className="embed-responsive embed-responsive-4by3">
                      <img
                        className="embed-responsive-item"
                        src="/images/cashew.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="entity-bg"
                    style={{ background: "#cdced2", borderRadius: "0.5rem" }}
                  ></div>
                  <div className="pt-0 entity-content">
                    <h4 className="entity-title">
                      <a
                        className="content-link"
                        href="#"
                        style={{ color: "#000" }}
                      >
                        {dryFruit.data().name}
                      </a>
                    </h4>
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
                        / {dryFruit.data().qty} gms
                      </span>
                      <br />
                      <span className="currency">Rs.</span>
                      {dryFruit.data().price}
                    </div>
                    <div className="mt-4 entity-action-btns">
                      <a className="btn-wide btn btn-theme" href="#">
                        Add to cart
                      </a>
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
