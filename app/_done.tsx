"use client";

import doneImg from "@/public/done.svg";
import doneIcon from "@/public/doneCircle.svg";
import doneEmptyImg from "@/public/doneEmpty.svg";
import { TodoProps } from "@/types/todo";
import Image from "next/image";
import Link from "next/link";

export default function Done({ todos, handleToggleTodo }: TodoProps) {
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-1">
        <Image src={doneImg} alt="한 일 이미지" />
        {completedTodos.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <Image
              src={doneEmptyImg}
              alt="한 일 없음 이미지"
              className="w-30 h-30 md:w-60 md:h-60"
            />
            <div className="flex flex-col justify-center items-center text-slate-400">
              <span>아직 다 한 일이 없어요</span>
              <span>해야 할 일을 체크해보세요!</span>
            </div>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {completedTodos.map((todo) => (
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
