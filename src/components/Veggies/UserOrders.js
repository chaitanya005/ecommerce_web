import React, { useState, useEffect } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import firestore from "../../firebase";
import { getUserDetails } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { storeOrders, getOrders } from "../../features/order";

const UserOrders = () => {
  const [stateUpdate, setStateUpdate] = useState({
    id: "",
    isOpen: false,
  });
  const userDetails = useSelector(getUserDetails);

  const order = useSelector(getOrders);

  const dispatch = useDispatch([]);

  // const [order, setOrder] = useState([]);

  const handleIsOpen = (id) => {
    setStateUpdate((prev) => ({
      id: id,
      isOpen: !prev.isOpen,
    }));
  };

  let documents = [];

  useEffect(() => {
    if (userDetails.uid) {
      const fetchData = async () => {
        const doc = firestore
          .collection(`orders`)
          .doc(userDetails.uid)
          .collection("order");

        const snapshot = await doc.get();

        snapshot.forEach((doc) => {
          // setOrder([doc.data()]);
          let document = doc.data();

          documents = [...documents, { id: doc.id, ...document }];
        });

        dispatch(
          storeOrders({
            documents,
          })
        );
      };

      fetchData();
    }
  }, []);

  // console.log(order.yourOrders && order.yourOrders);

  // console.log(order.yourOrders);

  return (
    <React.Fragment>
      <section
        className="
        after-head
        top-block-page
        with-back
        white-curve-after
        section-white-text
      "
      >
        <div className="overflow-back bg-orange"></div>
        <div className="content-offs-stick my-5 container">
          <div className="section-solid with-back">
            <div className="full-block">
              <div className="section-back-text">My Orders</div>
              <img
                className="d-none-1 d-lg-block z-index-3"
                src="/assets/images/content/x/mandarin.png"
                alt=""
                data-size="280px"
                data-at="10%;bottom 35%"
                style={{ width: "400px" }}
              />
            </div>
            <div className="z-index-4 position-relative text-center">
              <h1 className="section-title">Your Orders</h1>
              <div className="mt-3">
                <div className="page-breadcrumbs">
                  <a className="content-link" href="/veggies">
                    Veggies
                  </a>
                  <span className="mx-2">\</span>
                  <span>Orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 section">
        <div className="container">
          <div className="order-line-head-entity d-none d-md-block">
            <div className="entity-line-head">
              <div className="entity-order-number">Order</div>
              <div className="entity-title"></div>
              <div className="entity-date"></div>
              <div className="entity-total">Total</div>
              <div className="entity-status">Status</div>
            </div>
          </div>
          {order &&
            order.yourOrders.map((eachOrder, i) => (
              <React.Fragment>
                {/* eachOrder.order.map() */}
                <Accordion style={{ backgroundColor: "#1d1c22" }}>
                  <div className="entity-accordion-group">
                    <div
                      className="
          order-line-entity
          dash-separated-entity
          entity-hover-only-shadow-block entity-expandable
        "
                      id="order-923776A"
                      data-theme-accordion="orders-list"
                    >
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        onClick={() => handleIsOpen(eachOrder.id)}
                      >
                        <div className="entity-line-head entity-expand-head">
                          <div className="entity-expand">
                            <div className="entity-active-rotate">
                              <i className="fas fa-angle-double-down fa-fw"></i>
                            </div>
                          </div>
                          <div
                            className="entity-number"
                            style={{ color: "#ffb524" }}
                          >
                            #{eachOrder.id}
                          </div>
                          <div className="entity-break d-sm-none"></div>
                          <div className="entity-title"></div>
                          <div className="entity-break d-md-none"></div>
                          <div className="entity-total">
                            Rs.{eachOrder.order[3].total}
                          </div>
                          <div className="entity-status text-success">
                            Order Placed
                          </div>
                        </div>
                      </AccordionSummary>
                      {/* entity-expanded-content */}
                      {stateUpdate.id == eachOrder.id &&
                      stateUpdate.isOpen === true ? (
                        <React.Fragment>
                          <AccordionDetails style={{ display: "block" }}>
                            <React.Fragment>
                              <div className="">
                                <div className="separator-dashed"></div>
                                <div className="entity-line-items">
                                  {eachOrder.order[1].orderItems.map(
                                    (orderItems) => (
                                      <React.Fragment>
                                        <div className="line-entity">
                                          {/* console.log(orderItems) */}
                                          <div className="entity-line-image">
                                            <a
                                              className="entity-preview-show-up entity-preview"
                                              href="#/"
                                            >
                                              <span className="embed-responsive embed-responsive-4by3">
                                                <img
                                                  className="embed-responsive-item"
                                                  src={orderItems.img}
                                                  alt=""
                                                />
                                              </span>
                                              <span className="with-back entity-preview-content">
                                                <span className="h3 m-auto text-theme text-center">
                                                  <i className="fas fa-search"></i>
                                                </span>
                                                <span className="overflow-back bg-body-back opacity-70"></span>
                                              </span>
                                            </a>
                                          </div>
                                          <div className="entity-title">
                                            <a
                                              className="content-link"
                                              href="#/"
                                            >
                                              {orderItems.name}
                                            </a>
                                          </div>
                                          <div className="entity-break d-md-none"></div>
                                          <div className="entity-price">
                                            Rs. {orderItems.price}
                                          </div>
                                          <div
                                            className="entity-quantity"
                                            style={{ color: "#fff" }}
                                          >
                                            x{orderItems.qty}
                                          </div>
                                          <div className="entity-total">
                                            Rs. {orderItems.newPrice}
                                          </div>
                                        </div>
                                      </React.Fragment>
                                    )
                                  )}
                                </div>
                                {/* console.log(eachOrder.order[2].name) */}
                                <div className="separator-dashed"></div>
                                <div className="entity-content-details">
                                  <div
                                    className="entity-content-title"
                                    style={{ color: "#fff" }}
                                  >
                                    Order information
                                  </div>
                                  <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                      <ul className="main-list entity-list">
                                        <li>
                                          <span
                                            className="entity-list-title"
                                            style={{ color: "#fff" }}
                                          >
                                            Name:
                                          </span>
                                          <span
                                            className="entity-list-value"
                                            style={{ color: "#ffb524" }}
                                          >
                                            {eachOrder.order[2].name}
                                          </span>
                                        </li>
                                        <li>
                                          <span
                                            className="entity-list-title"
                                            style={{ color: "#fff" }}
                                          >
                                            Addresss:
                                          </span>
                                          <span className="entity-list-value"></span>
                                        </li>
                                        <li>
                                          <span className="entity-list-title"></span>
                                          <span
                                            className="entity-list-value"
                                            style={{ color: "#ffb524" }}
                                          >
                                            {eachOrder.order[2].address}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                      <ul className="main-list entity-list">
                                        {/* <li>
                                          <span className="entity-list-title">
                                            Tracking number:
                                          </span>
                                          <span className="entity-list-value">
                                            -
                                          </span>
                                        </li>
                                        <li>
                                          <span className="entity-list-title">
                                            Logistics company:
                                          </span>
                                          <span className="entity-list-value">
                                            ePacket
                                          </span>
                                        </li>
                                        <li>
                                          <span className="entity-list-title">
                                            Shipment date:
                                          </span>
                                          <span className="entity-list-value">
                                            -
                                          </span>
                                        </li> */}
                                      </ul>
                                    </div>
                                    <div className="mt-4 mt-lg-0 col-md-6 col-lg-4">
                                      <ul className="flex-list entity-list">
                                        <li className="entity-detail-subtotal">
                                          <span className="entity-list-title">
                                            Sub Total:
                                          </span>
                                          <span className="entity-list-value">
                                            Rs. {eachOrder.order[3].total - 20}
                                          </span>
                                        </li>
                                        <li className="entity-detail-subtotal">
                                          <span className="entity-list-title">
                                            Shipping:
                                          </span>
                                          <span className="entity-list-value">
                                            Rs. 20.00
                                          </span>
                                        </li>
                                        <li className="separator-line my-3"></li>
                                        <li className="entity-detail-total">
                                          <span className="entity-list-title">
                                            Total:
                                          </span>
                                          <span className="entity-list-value">
                                            Rs. {eachOrder.order[3].total}
                                          </span>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </React.Fragment>
                          </AccordionDetails>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Accordion>
              </React.Fragment>
            ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserOrders;
