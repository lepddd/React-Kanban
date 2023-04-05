import React from "react";
import { Card } from "../Card/Card";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "@stitches/react";

//Stiches
const DropzoneBox = styled("div", {
  paddingBottom:'10px',
  width: "100%",
  minHeight: "fit-content",
  display: "flex",
  flexDirection: "column",
});

export const Dropzone = ({ columnId, column }) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <DropzoneBox ref={provided.innerRef} {...provided.droppableProps}>
          {column.tasks.map((task, index) => (
            <Card
              columnId={columnId}
              content={task}
              index={index}
              key={task.id}
            />
          ))}
          {provided.placeholder}
        </DropzoneBox>
      )}
    </Droppable>
  );
};
