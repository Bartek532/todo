export const todosList = [
  {
    id: 1,
    text: "Call the dentist",
    isDone: false
  },
  {
    id: 2,
    text: "Read an article",
    isDone: false
  },
  {
    id: 3,
    text: "Check in to flight",
    isDone: false
  },
  {
    id: 4,
    text: "Go for a walk",
    isDone: true
  },
  {
    id: 5,
    text: "Create new project",
    isDone: false
  }
];

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};
