import { ContainerPage } from "../style";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ColumnItem } from "../Compoents/Column";
import { AddColumn } from "../Compoents/AddColumn";
import * as React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../state/context";

export const MainPage = () => {
  const {columns} = useContext(CurrentUserContext);

  return (<ContainerPage>
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
      {columns.map((item, index) => <ColumnItem key={item + index}/>)}
      <AddColumn/>
    </ContainerPage>
  )
}
