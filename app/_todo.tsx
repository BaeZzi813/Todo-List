"use client";

import todoImg from "@/public/todo.svg";
import todoIcon from "@/public/todoCricle.svg";
import todoEmptyImg from "@/public/todoEmpty.svg";
import { TodoProps } from "@/types/todo";
import Image from "next/image";
import Link from "next/link";

export default function Todo({ todos, handleToggleTodo }: TodoProps) {
  const incompletedTodos = todos.filter((todo) => !todo.isCompleted);
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-1">
        <Image src={todoImg} alt="할 일 이미지" />
        {incompletedTodos.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <Image
              src={todoEmptyImg}
              alt="할 일 없음 이미지"
              className="w-30 h-30 md:w-60 md:h-60"
            />
            <div className="flex flex-col justify-center items-center text-slate-400">
              <span>할 일이 없어요</span>
              <span>TODO를 새롭게 추가해주세요!</span>
            </div>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {incompletedTodos.map((todo) => (
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
                <Link href={`/items/${todo.id}`} className="flex-1">
                  {todo.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
