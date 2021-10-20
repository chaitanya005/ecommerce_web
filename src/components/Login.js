import React, { useState } from "react";
import db, { auth, firebase, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser, getUserUid } from "../features/user/userSlice";
import { createUserDocument } from "../firebase";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";
import GoogleIcon from "@mui/icons-material/Google";
import Loading from "./Loading";

const Login = () => {
  const [loginNumber, setLoginNumber] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [code, setCode] = useState(null);
  const [codeSent, setCodeSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const uId = useSelector(getUserUid);
  const [err, setErr] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha");
    setIsCaptchaVerified(true);
    /* if (window.recaptchaVerifier !== undefined) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } */
  };

  const handleNumber = () => {
    // setIsLoading(true);
    if (!uId) {
      configureCaptcha();
      let number = "+91" + loginNumber;
      const appVerifier = window.recaptchaVerifier;
      auth
        .signInWithPhoneNumber(number, appVerifier)
        .then((e) => {
          //   let code = prompt("Enter the otp", "");
          window.confirmationResult = e;
          setCodeSent(true);
          setIsLoading(false);
          alert("OTP Sent");
        })
        .catch((err) => {
          console.log(err);
          // console.log(err.message);
          setErr(err.message);
        });
    } else {
      alert("Already Logged In");
    }
  };

  const onSubmitOTP = (e) => {
    e.preventDefault();
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then(async (result) => {
        dispatch(
          setUser({
            name: "",
            email: "",
            photo: "",
            uid: result.user.uid,
            phoneNumber: result.user.phoneNumber,
          })
        );
        await createUserDocument(result.user);
        history.push("/checkout");
      })
      .catch((error) => {
        console.log(error.message);
        setErr();
      });
  };

  const handleGoogleLogin = () => {
    if (!uId) {
      auth
        .signInWithPopup(provider)
        .then((res) => {
          auth
            .signInWithCredential(res.credential)
            .then(async (res) => {
              dispatch(
                setUser({
                  name: res.user.displayName,
                  email: res.user.email,
                  photo: res.user.photoURL,
                  uid: res.user.uid,
                  phoneNumber: "",
                })
              );
              await createUserDocument(res.user);
              history.push("/checkout");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Already Logged In");
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <style>{`
        body {
          background-color: #fff;
        }
        `}</style>
        {/* <link rel="stylesheet" href="/assets/porto.css" />
        <link rel="stylesheet" href="/assets/style.css" /> */}
        {/* <link href="/assets/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
        <link href="/assets/molla.css" rel="stylesheet" />
        <link href="/assets/mollabstrap.css" rel="stylesheet" />
      </Helmet>
      <div
        className="modal fade"
        id="signin-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{ margin: "10px auto", justifyContent: "center" }}
        >
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="form-box"
                // style={{ margin: "auto", justifyContent: "center" }}
              >
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <div
                        className="nav-link active"
                        // id="signin-tab"
                        // data-toggle="tab"
                        // role="tab"
                        // aria-controls="signin"
                        // aria-selected="true"
                        style={{ borderBottomColor: "#08c" }}
                      >
                        Sign In
                      </div>
                    </li>
                    {/*  <li className="nav-item">
                      <a
                        className="nav-link"
                        id="register-tab"
                        data-toggle="tab"
                        href="#register"
                        role="tab"
                        aria-controls="register"
                        aria-selected="false"
                      >
                        Register
                      </a>
                    </li> */}
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div
                      className="tab-pane fade show active"
                      id="signin"
                      role="tabpanel"
                      aria-labelledby="signin-tab"
                    >
                      {!codeSent ? (
                        <div className="form-group">
                          <form onSubmit={handleNumber}>
                            <label for="singin-email">Phone Number *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="singin-email"
                              name="singin-email"
                              style={{ display: "block", width: "100%" }}
                              onChange={(e) => setLoginNumber(e.target.value)}
                            />
                          </form>
                        </div>
                      ) : (
                        ""
                      )}
                      {isLoading ? <Loading /> : ""}
                      {!codeSent ? <div id="recaptcha"></div> : ""}
                      {!isCaptchaVerified ? (
                        <div className="form-footer">
                          <button
                            type="submit"
                            style={{
                              borderColor: "#08c",
                              color: "#fff",
                              backgroundColor: "#08c",
                              borderRadius: "5px",
                            }}
                            className="btn btn-outline-primary-2"
                            onClick={handleNumber}
                          >
                            <span>Send OTP</span>
                            {/* <i className="icon-long-arrow-right"></i> */}
                          </button>
                          <p
                            style={{
                              color: "red",
                              textAlign: "center",
                              margin: "auto",
                            }}
                          >
                            {err}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}

                      {codeSent ? (
                        <React.Fragment>
                          <div className="form-group">
                            <form onSubmit={onSubmitOTP}>
                              <label for="singin-password">
                                Enter One Time Password (OTP)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="singin-password"
                                name="singin-password"
                                required
                                style={{ display: "block", width: "100%" }}
                                onChange={(e) => setCode(e.target.value)}
                              />
                            </form>
                          </div>

                          <div className="form-footer">
                            <button
                              type="submit"
                              style={{
                                borderColor: "#08c",
                                color: "#fff",
                                backgroundColor: "#08c",
                                borderRadius: "5px",
                              }}
                              className="btn btn-outline-primary-2"
                              onClick={onSubmitOTP}
                            >
                              <span>Submit OTP</span>
                              {/* <i className="icon-long-arrow-right"></i> */}
                            </button>
                          </div>
                        </React.Fragment>
                      ) : (
                        ""
                      )}

                      <div className="form-choice">
                        <p
                          className="text-center"
                          style={{ textAlign: "center" }}
                        >
                          or sign in with
                        </p>
                        <div className="row">
                          <div className="col-sm-6">
                            <div
                              className="btn btn-login btn-g"
                              style={{ cursor: "pointer", fontWeight: "400" }}
                              onClick={handleGoogleLogin}
                            >
                              <GoogleIcon
                                style={{
                                  marginRight: "5px",
                                  color: "#cc3333",
                                }}
                              />
                              Login With Google
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
