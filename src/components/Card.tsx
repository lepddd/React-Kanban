import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { styled } from "../stitches.config";

//Stitches
const Container = styled("div", {
  width: "320px",
  padding: "10px 0",
});

const SCard = styled("div", {
  backgroundColor: "#f4f4f4",
  borderRadius: "2px",
  width: "100%",
  boxShadow:
    "0px 2px 2px rgba(115, 115, 115, 0.06), 0px 4px 3px rgba(115, 115, 115, 0.07)",
  display: "flex",
  flexDirection: "column",
  padding: "12px",
  gap: "12px",
});

const CardHeader = styled("div", {
  display: "flex",
  gap: "4px",
});

const Avatar = styled("span", {
  width: "24px",
  height: "24px",
  backgroundColor: "#C4C4C4",
  borderRadius: "50%",
});

const CardIcon = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  cursor: "pointer",

  variants: {
    type: {
      edit: {
        backgroundColor: "#DBEAFE",
      },
      delete: {
        backgroundColor: "#FFE4E6",
      },
      confirm: {
        backgroundColor: "#D1FAE5",
      },
      cancel: {
        backgroundColor: "#FFE4E6",
      },
    },
  },
});

const Task = styled("p", {
  flex: "1",
  color: "#525252",
  textAlign: "start",
  fontSize: "0.875rem",
  fontWeight: "400",
  padding: "4px",
});

const TaskArea = styled("textarea", {
  flex: "1",
  color: "#525252",
  textAlign: "start",
  fontSize: "0.875rem",
  fontWeight: "400",
  padding: "4px",
  resize: "none",
  outline: "none",
  backgroundColor: "#f4f4f4",
});

const Options = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
});

export const Card = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const changeEditState = () => {
    setIsEditing((prev) => !prev);
  };

  const changePlayState = () => {
    setIsPlaying((prev) => !prev);
  };

  if (isEditing) {
    return (
      <Container>
        <SCard>
          <CardHeader>
            <Avatar></Avatar>
            <TaskArea defaultValue={"Header illustration"} />
          </CardHeader>
          <Options>
            <CardIcon className="icon" type="confirm">
              <Icon
                icon="material-symbols:check-small-rounded"
                color="#4ecb71"
                width="24"
                height="24"
              />
            </CardIcon>
            <CardIcon className="icon" type="cancel" onClick={changeEditState}>
              <Icon icon="ci:close-sm" color="#fb7185" width="24" height="24" />
            </CardIcon>
          </Options>
        </SCard>
      </Container>
    );
  }

  return (
    <Container>
      <SCard>
        <CardHeader>
          <Avatar></Avatar>
          <Task>Header illustration</Task>
          {isPlaying ? (
            <CardIcon className="icon" onClick={changePlayState}>
              <Icon
                icon="material-symbols:play-arrow-rounded"
                color="#525252"
                width="24"
                height="24"
              />
            </CardIcon>
          ) : (
            <CardIcon className="icon" onClick={changePlayState}>
              <Icon
                icon="material-symbols:stop-rounded"
                color="#f43f5e"
                width="24"
                height="24"
              />
            </CardIcon>
          )}
        </CardHeader>
        <Options>
          <CardIcon className="icon" type="edit" onClick={changeEditState}>
            <Icon
              icon="mingcute:edit-2-line"
              color="#60a5fa"
              width="16"
              height="16"
            />
          </CardIcon>
          <CardIcon className="icon" type="delete">
            <Icon
              icon="mdi:delete-empty-outline"
              color="#fb7185"
              width="16"
              height="16"
            />
          </CardIcon>
        </Options>
      </SCard>
    </Container>
  );
};
