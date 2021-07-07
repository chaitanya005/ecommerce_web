import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import reducers from "./app/store";
// import { reduxStore } from "./app/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";
import {
  createStateSyncMiddleware,
  initStateWithPrevTab,
} from "redux-state-sync";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const config = {
  // channel: "my_channel",
  // blacklist: ["TOGGLE_TODO"],
  // broadcastChannelOption: { type: "localstorage" },
  // blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
};
const middlewares = [createStateSyncMiddleware(config)];

const store = createStore(
  reducers,
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);
initStateWithPrevTab(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/*   <PersistGate loading={null} persistor={persistor}>
      </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
