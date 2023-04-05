import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { styled } from "../../../stitches.config";
import { Icon } from "@iconify/react";
import { Draggable } from "react-beautiful-dnd";
import { useData } from "../../store/useData";
import useResizeArea from "../../hooks/useResireArea";

//Stiches
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
  backgroundColor: "#bae6fd",
  borderRadius: "50%",
  square: "24px",
});

const AvatarImg = styled("img", {
  width: "100%",
  height: "100%",
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
  inlineSize: "150px",
  overflowWrap: "break-word",
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
  height: "auto",
  overflow: "hidden",
});

const Options = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
});

export const Card = ({ columnId, content, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const refValue = useRef();

  const { resizeArea } = useResizeArea(refValue, isEditing);

  //Destructuring props
  const { id, isPlaying, task, authorName, authorImg } = content;

  //Zustand actions
  const deleteTask = useData((state) => state.deleteTask);
  const editTask = useData((state) => state.editTask);
  const changeState = useData((state) => state.changeState);

  const changeEditState = () => {
    setIsEditing((prev) => !prev);
  };

  const changePlayState = (columnId, id) => {
    changeState(columnId, id);
  };

  const saveTask = (columnId, task, value) => {
    editTask(columnId, task, value);
    changeEditState();
  };

  if (isEditing) {
    return (
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <SCard>
              <CardHeader>
                <Avatar>
                  <AvatarImg src={authorImg} alt="avatarIcon" />
                </Avatar>
                <TaskArea
                  defaultValue={task}
                  ref={refValue}
                  onChange={resizeArea}
                  onMouseEnter={resizeArea}
                />
              </CardHeader>

              <Options>
                <CardIcon
                  type="confirm"
                  onClick={() =>
                    saveTask(columnId, task, refValue.current.value)
                  }
                >
                  <Icon
                    icon="material-symbols:check-small-rounded"
                    color="#4ecb71"
                    width="24"
                    height="24"
                  />
                </CardIcon>
                <CardIcon type="cancel" onClick={changeEditState}>
                  <Icon
                    icon="ci:close-sm"
                    color="#fb7185"
                    width="24"
                    height="24"
                  />
                </CardIcon>
              </Options>
            </SCard>
          </Container>
        )}
      </Draggable>
    );
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <SCard>
            <CardHeader>
              <Avatar>
                <AvatarImg src={authorImg} alt="avatarIcon" />
              </Avatar>
              <Task>{task}</Task>
              {isPlaying ? (
                <CardIcon
                  className="icon"
                  onClick={() => changePlayState(columnId, id)}
                >
                  <Icon
                    icon="material-symbols:play-arrow-rounded"
                    color="#525252"
                    width="24"
                    height="24"
                  />
                </CardIcon>
              ) : (
                <CardIcon
                  className="icon"
                  onClick={() => changePlayState(columnId, id)}
                >
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
                  icon="ri:edit-box-line"
                  color="#3b82f6"
                  width="16"
                  height="16"
                />
              </CardIcon>
              <CardIcon
                className="icon"
                type="delete"
                onClick={() => deleteTask(columnId, id)}
              >
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
      )}
    </Draggable>
  );
};
