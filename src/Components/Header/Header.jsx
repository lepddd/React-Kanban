import React from "react";
import { Icon } from "@iconify/react";
import { styled } from "../../../stitches.config";
import { useData } from "../../store/useData";

//Stiches
const HeaderBox = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "22px 20px",
  minWidth: "300px",
});

const Title = styled("div", {
  fontSize: "1.5rem",
  transition: "0.2s font-size ease-in-out",

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
  
  //Breakpoint
  "@bp1": {
    fontSize: "2rem",
  },
});

const HeaderButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#64748b",
  borderRadius: "50%",
  border: "1px solid #f4f4f4",
  padding: "12px",
  backgroundColor: "#f4f4f4",
  cursor: "pointer",
  transition: "0.3s ease-in-out",

  "&:hover": {
    transition: "0.3s ease-in-out",
    boxShadow:
      "0px 4px 16px rgba(17, 17, 26, 0.1), 0px 8px 32px rgba(17, 17, 26, 0.05)",
    border: "1px solid rgba(148, 163, 184, 0.2)",
  },
});

export const Header = () => {
  const addNewColumn = useData((state) => state.addNewColumn);
  return (
    <HeaderBox>
      <Title>
        <span>Board</span>
        <span>Project</span>
      </Title>
      <HeaderButton onClick={addNewColumn}>
        <Icon icon="clarity:plus-line" width="24" height="24" />
      </HeaderButton>
    </HeaderBox>
  );
};
