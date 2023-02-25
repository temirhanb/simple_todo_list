import * as React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";

import { ContainerPage } from "./style";
import { ColumnItem } from "./Compoents/Column";

const App = () => {

  return (
    <ContainerPage>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            maxWidth: '100vw',
            background: '#3c3c3c',
            display: 'flex',
          }
        }}
      />
      <ColumnItem/>
    </ContainerPage>
  );
}

export default App;
