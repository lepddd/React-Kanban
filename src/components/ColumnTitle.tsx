import React from "react";
import { styled } from "../stitches.config";

//Stitches
const Container = styled("div", {
  width: "320px",
  padding: " 12px 16px",
  borderRadius: "2px",
  marginBottom: "10px",

  variants: {
    col: {
      tasks: {
        backgroundColor: "#60A5FA",
      },
      inprogress: {
        backgroundColor: "#FDBA74",
      },
      review: {
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

export const ColumnTitle = ({ title }: { title: string }) => {
  return (
    <Container col="tasks">
      <Title>{title.toUpperCase()}</Title>
    </Container>
  );
};
