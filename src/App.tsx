import * as React from "react";
import { Provider } from "./state/context";
import { MainPage } from "./Page";

const App = () => {

  return (
    <Provider>
      <MainPage/>
    </Provider>
  );
}

export default App;
