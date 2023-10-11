import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../app/providers/with-redux";
import { ColumnItem } from "widgets/";

import { Layout } from "./styles";
import { AddColumn } from "features";
import { TaskWidget } from "../../widgets/tasks/component";

export const TaskListPage: React.FC = () => {

  const columns = useSelector((state: RootState) => state.columns);

  return (
    <Layout>
      {columns.map((item) => <ColumnItem {...item} key={item.id}/>)}
      <AddColumn/>
      <TaskWidget name={'test'}/>
    </Layout>
  )
}
