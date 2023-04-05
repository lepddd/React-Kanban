import React from "react";
import { Dropzone } from "../Dropzone/Dropzone";
import { styled } from "@stitches/react";
import { Input } from "../Input/Input";
import { Icon } from '@iconify/react';
import { useData } from "../../store/useData";

//Stiches
const ColumnBox = styled("div", {
  overflow: "hidden",
  width: "320px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const TitleBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "320px",
  padding: " 12px 16px",
  borderRadius: "2px",
  marginBottom: "10px",
  backgroundColor: "#a78bfa",

  variants: {
    col: {
      tasks: {
        backgroundColor: "#60A5FA",
      },
      inprogress: {
        backgroundColor: "#FDBA74",
      },
      readyforreview: {
        backgroundColor: "#818CF8",
      },
      approved: {
        backgroundColor: "#4ADE80",
      },
    },
  },
});

const Title = styled("p", {
  fontWeight: "700",
  fontSize: "1rem",
  color: "#F4F4F4",
  textAlign: "start",
});

const Button = styled('button', {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'transparent',
  border:'none',
  cursor:'pointer',
})

export const Column = ({ columnId, column }) => {
  const { status, tasks, isDeletable } = column;

  const removeColumn = useData(state => state.removeColumn)

  return (
    <ColumnBox>
      <TitleBox col={status.split(" ").join("").toLowerCase()}>
        <Title>{status.toUpperCase()}</Title>
        {isDeletable ? (
          <Button onClick={() => removeColumn(columnId)}>
            <Icon
              icon="mingcute:delete-back-line"
              color="#f4f4f4"
              width="18"
              height="18"
            />
          </Button>
        ) : null}
      </TitleBox>

      <Input columnId={columnId} />

      <Dropzone column={column} columnId={columnId} />
    </ColumnBox>
  );
};
