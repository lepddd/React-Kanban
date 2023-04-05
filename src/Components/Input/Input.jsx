import React, { useState } from "react";
import { styled } from "@stitches/react";
import { Icon } from "@iconify/react";
import { useData } from "../../store/useData";

//Stitches
const Container = styled("div", {
  position: "relative",
  width: "320px",
  border: "1px solid #D4D4D4",
  borderRadius: "2px",
  transition: "0.2s all ease-in-out",
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

const InputIcon = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#f4f4f4",
});

const Options = styled("div", {
  right: "12px",
  top: "9.5px",
  position: "absolute",
  display: "flex",
  justifyContent: "flex-end",
  gap: "5px",
});

export const Input = ({ columnId }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = useData((state) => state.addTask);

  const isShow = inputValue.length;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInputValue = () => {
    setInputValue("");
  };

  const addNewTask = (columnId, value, e) => {
    e.preventDefault();

    const newTask = { task: value, isPlaying: true };

    addTask(columnId, newTask);
    clearInputValue();
  };

  return (
    <form onSubmit={(e) => addNewTask(columnId, inputValue, e)}>
      <Container>
        <SInput
          value={inputValue}
          type="text"
          placeholder="Add a card..."
          onChange={handleChange}
          required
        />
        {isShow ? (
          <Options>
            <InputIcon type="submit">
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
    </form>
  );
};
