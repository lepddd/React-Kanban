import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "../Column/Column";
import { useData } from "../../store/useData";
import { styled } from "../../../stitches.config";

//Stiches
const ContainerBox = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "20px",
  padding: "20px 0",
  alignItems: "flex-start",
  flexWrap: "wrap",
  
  //Breakpoint
  "@bp2": {
    width: "fit-content",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },

  "@bp3": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

export const Container = () => {
  const column = useData((state) => state.data);
  const setColumn = useData((state) => state.setColumn);
  const setRow = useData((state) => state.setRow);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const sourceId = source.droppableId;
    const destinationId = destination.droppableId;

    if (sourceId !== destinationId) {
      setColumn(sourceId, destinationId, result);
    } else {
      setRow(sourceId, result);
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ContainerBox>
        {Object.entries(column).map(([columnId, column]) => (
          <Column column={column} columnId={columnId} key={columnId} />
        ))}
      </ContainerBox>
    </DragDropContext>
  );
};
