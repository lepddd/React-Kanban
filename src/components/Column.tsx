import React from "react";
import { ColumnTitle } from "./ColumnTitle";
import { Input } from "./Input";
import { Card } from "./Card";

export const Column = ({title}:{title:string}) => {
  return (
    <div>
      <ColumnTitle title={title}/>
      <Input />
      <div>
        <Card />
      </div>
    </div>
  );
};
