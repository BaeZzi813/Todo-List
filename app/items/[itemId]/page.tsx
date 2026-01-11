"use client";

import { getDetailTodos } from "@/services/todoService";
import { TodoDetail as TodoDetailType } from "@/types/todo";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import TodoImage from "./_todo-image";
import TodoMemo from "./_todo-memo";
import TodoName from "./_todo-name";

export default function TodoDetail() {
  const { itemId } = useParams<{ itemId: string }>();
  const [todo, setTodo] = useState<TodoDetailType | null>(null);

  useEffect(() => {
    const fetchTodoDetail = async () => {
      try {
        const data = await getDetailTodos(itemId);
        setTodo(data);
      } catch (error) {
        console.error("할 일 상세 불러오기 실패", error);
      }
    };
    if (itemId) {
      fetchTodoDetail();
    }
  }, [itemId]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="px-4 pt-4 md:pt-6 mx-auto md:px-0 md:max-w-255.75 min-h-screen lg:max-w-300 bg-white">
          <TodoName todo={todo} />
          <div className="lg:flex lg:max-w-249 lg:mx-auto">
            <TodoImage />
            <TodoMemo />
          </div>
        </div>
      </div>
    </>
  );
}
