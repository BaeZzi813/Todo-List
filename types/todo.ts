export interface Todo {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface TodoProps {
  todos: Todo[];
  handleToggleTodo: (id: number, isCompleted: boolean) => void;
}

export interface TodoDetail {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}