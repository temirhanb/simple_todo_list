import * as React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";

import { BackGroundPage } from "./style";

const App = () => {

  return (
    <BackGroundPage>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            maxWidth: '100vw',
            background: '#3c3c3c',
          }
        }}
      />

    </BackGroundPage>
  );
}

export default App;
