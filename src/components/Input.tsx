import React, { useState, ChangeEvent } from "react";
import { styled } from "../stitches.config";
import { Icon } from "@iconify/react";

//Stitches
const Container = styled("div", {
  position: "relative",
  width: "320px",
  border: "1px solid #D4D4D4",
  borderRadius: "2px",
  transition:'0.2s all ease-in-out',
  "&:focus-within": {    
    border: "1px solid #38BDF8",
    boxShadow: "0px 1px 3px 1px rgba(14, 165, 233, 0.15)",
    filter: "drop-shadow(0px 4px 4px rgba(14, 165, 233, 0.25))",
  },
});

const SInput = styled("input", {
  paddingTop: "12px",
  paddingLeft: "12px",
  paddingBottom: "12px",
  paddingRight: "77px",
  color: "#525252",
  fontSize: "1rem",
  outline: "none",
  backgroundColor: "#f4f4f4",
  border: "none",
  width: "100%",
  height: "100%",

  "&::placeholder": {
    color: "#D4D4D4",
  },
});

const InputIcon = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  cursor: "pointer",
});

const Options = styled("div", {
  right: "12px",
  top: "9.5px",
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  gap: "5px",
});

export const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const isShow = inputValue.length;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const clearInputValue = () => {
    setInputValue('')
  }

  return (
    <Container>
      <SInput value={inputValue} type="text" placeholder="Add a card..." onChange={handleChange} />
      {isShow ? (
        <Options>
          <InputIcon>
            <Icon
              icon="material-symbols:check-small-rounded"
              color="#4ecb71"
              width="24"
              height="24"
            />
          </InputIcon>
          <InputIcon onClick={clearInputValue}>
            <Icon icon="ci:close-sm" color="#f43f5e" width="24" height="24" />
          </InputIcon>
        </Options>
      ) : null}
    </Container>
  );
};
