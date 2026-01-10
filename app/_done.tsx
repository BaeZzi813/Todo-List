"use client";

import doneImg from "@/public/done.svg";
import Image from "next/image";
import doneIcon from "@/public/doneCircle.svg";
import { TodoProps } from "@/types/todo";

export default function Done({ todos, handleToggleTodo }: TodoProps) {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-1">
        <Image src={doneImg} alt="한 일 이미지" />
        <ul className="flex flex-col gap-4">
          {todos.map(
            (todo) =>
              todo.isCompleted && (
                <li
                  className="flex line-through gap-4 h-12.5 pl-3 items-center bg-violet-100 border-2 border-slate-900 rounded-[27px]"
                  key={todo.id}
                >
                  <button
                    onClick={() => handleToggleTodo(todo.id, todo.isCompleted)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={doneIcon}
                      width={32}
                      height={32}
                      alt="한 일 아이콘"
                    />
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
