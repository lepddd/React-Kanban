import React from "react";
import { styled } from "../stitches.config";

//Stitches
const SHeader = styled("header", {
  width: "100%",
  padding: "22px 40px",
  textAlign: "start",
  fontSize: "2rem",

  "& span": {
    "&:first-child": {
      fontWeight: "700",
      color: "#0A0A0A",
    },
    "&:last-child": {
      fontWeight: "400",
      color: "#737373",
    },
  },
});

export const Header = () => {
  return (
    <SHeader>
      <span>Board</span>
      <span>Project</span>
    </SHeader>
  );
};
