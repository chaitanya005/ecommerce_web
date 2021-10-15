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

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha");
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
        history.push("/cart");
      })
      .catch((error) => {
        console.log(error);
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
              history.push("/cart");
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
        class="modal fade"
        id="signin-modal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered"
          role="document"
          style={{ margin: "10px auto", justifyContent: "center" }}
        >
          <div class="modal-content">
            <div class="modal-body">
              <div
                class="form-box"
                // style={{ margin: "auto", justifyContent: "center" }}
              >
                <div class="form-tab">
                  <ul class="nav nav-pills nav-fill" role="tablist">
                    <li class="nav-item">
                      <div
                        class="nav-link active"
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
                    {/*  <li class="nav-item">
                      <a
                        class="nav-link"
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
                  <div class="tab-content" id="tab-content-5">
                    <div
                      class="tab-pane fade show active"
                      id="signin"
                      role="tabpanel"
                      aria-labelledby="signin-tab"
                    >
                      {!codeSent ? (
                        <div class="form-group">
                          <form onSubmit={handleNumber}>
                            <label for="singin-email">Phone Number *</label>
                            <input
                              type="text"
                              class="form-control"
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
                      {!codeSent ? (
                        <div class="form-footer">
                          <button
                            type="submit"
                            style={{
                              borderColor: "#08c",
                              color: "#fff",
                              backgroundColor: "#08c",
                              borderRadius: "5px",
                            }}
                            class="btn btn-outline-primary-2"
                            onClick={handleNumber}
                          >
                            <span>Send OTP</span>
                            {/* <i class="icon-long-arrow-right"></i> */}
                          </button>
                        </div>
                      ) : (
                        ""
                      )}

                      {codeSent ? (
                        <React.Fragment>
                          <div class="form-group">
                            <form onSubmit={onSubmitOTP}>
                              <label for="singin-password">
                                Enter One Time Password (OTP)
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="singin-password"
                                name="singin-password"
                                required
                                style={{ display: "block", width: "100%" }}
                                onChange={(e) => setCode(e.target.value)}
                              />
                            </form>
                          </div>

                          <div class="form-footer">
                            <button
                              type="submit"
                              style={{
                                borderColor: "#08c",
                                color: "#fff",
                                backgroundColor: "#08c",
                                borderRadius: "5px",
                              }}
                              class="btn btn-outline-primary-2"
                              onClick={onSubmitOTP}
                            >
                              <span>Submit OTP</span>
                              {/* <i class="icon-long-arrow-right"></i> */}
                            </button>
                          </div>
                        </React.Fragment>
                      ) : (
                        ""
                      )}

                      <div class="form-choice">
                        <p class="text-center" style={{ textAlign: "center" }}>
                          or sign in with
                        </p>
                        <div class="row">
                          <div class="col-sm-6">
                            <div
                              class="btn btn-login btn-g"
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
