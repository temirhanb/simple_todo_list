import { ContainerPage } from "../style";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ColumnItem } from "../Compoents/Column";
import { AddColumn } from "../Compoents/AddColumn";
import * as React from "react";
import { useSelector } from "react-redux";

export const MainPage = () => {
  // @ts-ignore
  const columns = useSelector((state) => state.columns);
  console.log(columns)
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
      {columns.map((item: any, index: any) => <ColumnItem key={item + index}/>)}
      <AddColumn/>
    </ContainerPage>
  )
}
