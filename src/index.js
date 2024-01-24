import React, { Suspense } from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./Components/app/store";
import 'rsuite/dist/rsuite.min.css';
import * as serviceWorker from './serviceWorker';
import AuthLoader from "./Components/Loader/AuthLoader";

let persistor = persistStore(store);

render(
  <Suspense fallback={<AuthLoader />}>
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();