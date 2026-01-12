import doneCircleIcon from "@/public/doneCircle.svg";
import todoIcon from "@/public/todoCricle.svg";
import { TodoDetail } from "@/types/todo";
import Image from "next/image";

interface TodoNameProps {
  todo: TodoDetail | null;
  isCompleted: boolean;
  handleToggleComplete: () => void;
}

export default function TodoName({
  todo,
  isCompleted,
  handleToggleComplete,
}: TodoNameProps) {
  return (
    <>
      <div
        className={`${
          isCompleted ? "bg-violet-200" : "bg-white"
        } border-2 md:max-w-3xl mx-auto lg:max-w-249 border-slate-900 gap-4 rounded-3xl flex items-center justify-center h-16`}
      >
        <Image
          src={isCompleted ? doneCircleIcon : todoIcon}
          alt="할 일 아이콘"
          onClick={handleToggleComplete}
          className="cursor-pointer"
        />
        <span className="underline underline-offset-4 decoration-1 text-[20px] font-bold">
          {todo?.name}
        </span>
      </div>
    </>
  );
}
