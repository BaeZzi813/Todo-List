"use client";

import { getTodos, patchTodos } from "@/services/todoService";
import { useEffect, useState } from "react";
import Done from "./_done";
import Todo from "./_todo";
import Searchbar from "./components/Searchbar";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("fail to fetch todos", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleTodo = async (id: number, isCompleted: boolean) => {
    try {
      await patchTodos(id, { isCompleted: !isCompleted });
      const updatedData = await getTodos();
      setTodos(updatedData);
    } catch (error) {
      console.error("토글 실패", error);
    }
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="w-full px-4 md:px-0 mx-auto md:max-w-3xl lg:max-w-300">
          <Searchbar onSubmit={fetchData} todos={todos} />
          <div className="mt-6 flex flex-col gap-12 lg:flex-row">
            <Todo todos={todos} handleToggleTodo={handleToggleTodo} />
            <Done todos={todos} handleToggleTodo={handleToggleTodo} />
          </div>
        </div>
      </div>
    </>
  );
}
