import * as React from "react";
import { useSelector } from "react-redux";
import GlobalStyles from "@mui/material/GlobalStyles";

import { ContainerPage } from "../app/style";

import { ColumnItem } from "../Compoents/Column";
import { AddColumn } from "../Compoents/Column/AddColumn";

import { RootState } from "../state";

export const MainPage: React.FC = () => {

  const columns = useSelector((state: RootState) => state.columns);

  return (
    <ContainerPage>
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            padding: 0,
            minHeight: '100vh',
            maxWidth: '100vw',
            background: '#ffffff',
            fontFamily: 'Lato',
            display: 'flex',
          }
        }}
      />
      {columns.map((item, index: number) => <ColumnItem {...item} key={item.id}/>)}
      <AddColumn/>
    </ContainerPage>
  )
}
