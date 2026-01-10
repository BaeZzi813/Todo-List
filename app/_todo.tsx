"use client";

import todoImg from "@/public/todo.svg";
import Image from "next/image";
import todoIcon from "@/public/todoCricle.svg";
import { TodoProps } from "@/types/todo";

export default function Todo({ todos, handleToggleTodo }: TodoProps) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-1">
        <Image src={todoImg} alt="할 일 이미지" />
        <ul className="flex flex-col gap-4">
          {todos.map(
            (todo) =>
              !todo.isCompleted && (
                <li
                  className="flex gap-4 h-12.5 pl-3 items-center bg-white border-2 border-slate-900 rounded-[27px]"
                  key={todo.id}
                >
                  <button
                    onClick={() => handleToggleTodo(todo.id, todo.isCompleted)}
                    className="cursor-pointer"
                  >
                    <Image src={todoIcon} alt="할 일 아이콘" />
                  </button>
                  {todo.name}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}
