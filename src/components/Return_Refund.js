import React from "react";

const Return_Refund = () => {
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
              <div className="section-back-text"></div>
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
              <h1 className="section-title">Return & Refund</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Our focus is complete customer satisfaction. In the event, if you are
          displeased with the services provided, we will refund back the money,
          provided the reasons are genuine and proved after investigation.
          Please read the fine prints of each deal before buying it, it provides
          all the details about the services or the product you purchase
        </div>
        <br />
        <div style={{ fontSize: "20px" }}>
          In case of dissatisfaction from our services, clients have the liberty
          to cancel their projects and request a refund from us. Our Policy for
          the cancellation and refund will be as follows:
        </div>
        <br />

        <h4> Cancellation Policy:</h4>
        <div style={{ fontSize: "20px" }}>
          For Cancellations please contact the us via{" "}
          <a href="mailto:updates@spontstore.com">
            <b>
              <i>mail: updates@spontstore.com</i>
            </b>
          </a>{" "}
          or via phone:{" "}
          <b>
            <i>+91 8790462050</i>
          </b>
          . Requests received later than 5 business days prior to the end of the
          current service period will be treated as cancellation of services for
          the next service period.
        </div>

        {/* <div style={{ textAlign: "center", fontSize: "20px" }}>
          In case of return you can inform us via{" "}
          <a href="mailto:updates@spontstore.com">
            <b>
              <i>mail: updates@spontstore.com</i>
            </b>
          </a>{" "}
          <br />
          via phone:{" "}
          <b>
            <i>+91 8790462050 / +91 9030462050</i>
          </b>
        </div> */}

        <br />
        <h4>Refund Policy:</h4>
        <div style={{ fontSize: "20px" }}>
          We will try our best to create the suitable design concepts for our
          clients. In case any client is not completely satisfied with our
          products we can provide a refund. If paid by credit card, refunds will
          be issued to the original credit card provided at the time of purchase
          and in case of payment gateway name payments refund will be made to
          the same account.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Return_Refund;
