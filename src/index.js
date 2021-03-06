import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { AppContextProvider } from "./redux/AppContextProvider";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      {/* <AppContextProvider store={store}> */}
      <App />
      {/* </AppContextProvider> */}
    </Provider>
  </StrictMode>,
  rootElement
);
