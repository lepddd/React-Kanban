import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; //Can be used nanoid instead uuid
import { AvatarGenerator } from "random-avatar-generator";

const generator = new AvatarGenerator();

const columns = {
  column1: {
    isDeletable: false,
    status: "Tasks",
    tasks: [
      {
        id: uuidv4(),
        task: "Company website redesing.",
        isPlaying: true,
        authorName: "",
        authorImg: generator.generateRandomAvatar(),
      },
    ],
  },
  column2: {
    isDeletable: false,
    status: "In progress",
    tasks: [
      {
        id: uuidv4(),
        task: "Mobile app login process prototype.",
        isPlaying: true,
        authorName: "",
        authorImg: generator.generateRandomAvatar(),
      },
    ],
  },
  column3: {
    isDeletable: false,
    status: "Ready for review",
    tasks: [
      {
        id: uuidv4(),
        task: "Onboarding designs.",
        isPlaying: true,
        authorName: "",
        authorImg: generator.generateRandomAvatar(),
      },
    ],
  },
  column4: {
    isDeletable: false,
    status: "Approved",
    tasks: [
      {
        id: uuidv4(),
        task: "Review administrator console designs.",
        isPlaying: true,
        authorName: "",
        authorImg: generator.generateRandomAvatar(),
      },
    ],
  },
};

export const useData = create((set, get) => ({
  data: columns,
  removeColumn: (columnId) => {
    const column = get().data;

    const filtered = Object.fromEntries(
      Object.entries(column).filter(([key]) => !key.includes(columnId))
    );

    set((state) => ({
      data: filtered,
    }));
  },
  addNewColumn: () => {
    const column = get().data;
    const dataLength = Object.keys(column).length;

    set((state) => ({
      data: {
        ...state.data,
        [`column${dataLength + 1}`]: {
          isDeletable: true,
          status: `column${dataLength + 1}`,
          tasks: [],
          authorName: "",
          authorImg: generator.generateRandomAvatar(),
        },
      },
    }));
  },
  changeState: (columnId, id) => {
    const column = get().data;

    const edited = column[columnId].tasks.map((item) => {
      if (item.id === id) return { ...item, isPlaying: !item.isPlaying };
      return item;
    });

    set((state) => ({
      data: {
        ...state.data,
        [columnId]: {
          ...column[columnId],
          tasks: edited,
        },
      },
    }));
  },
  editTask: (columnId, task, value) => {
    const column = get().data;

    const edited = column[columnId].tasks.map((item) => {
      if (item.task === task) return { ...item, task: value };
      return item;
    });

    set((state) => ({
      data: {
        ...state.data,
        [columnId]: {
          ...column[columnId],
          tasks: edited,
        },
      },
    }));
  },
  deleteTask: (columnId, itemId) => {
    const column = get().data;
    const filtered = column[columnId].tasks.filter(
      (item) => item.id !== itemId
    );

    set((state) => ({
      data: {
        ...state.data,
        [columnId]: {
          ...column[columnId],
          tasks: filtered,
        },
      },
    }));
  },
  addTask: (columnId, obj) => {
    const column = get().data;

    const task = { id: uuidv4(), ...obj };

    const sourceItems = [...column[columnId].tasks];

    sourceItems.splice(sourceItems[0], 0, task);

    set((state) => ({
      data: {
        ...state.data,
        [columnId]: {
          ...column[columnId],
          tasks: sourceItems,
        },
      },
    }));
  },
  setRow: (sourceId, result) => {
    const column = get().data;

    const { source, destination } = result;

    const sourceItems = [...column[sourceId].tasks];

    const [removed] = sourceItems.splice(source.index, 1);

    sourceItems.splice(destination.index, 0, removed);

    set((state) => ({
      data: {
        ...state.data,
        [sourceId]: {
          ...column[sourceId],
          tasks: sourceItems,
        },
      },
    }));
  },
  setColumn: (sourceId, destId, result) => {
    const column = get().data;

    const { source, destination } = result;

    const sourceItems = [...column[sourceId].tasks];
    const destItems = [...column[destId].tasks];

    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    set((state) => ({
      data: {
        ...state.data,
        [sourceId]: {
          ...column[sourceId],
          tasks: sourceItems,
        },
        [destId]: {
          ...column[destId],
          tasks: destItems,
        },
      },
    }));
  },
}));
