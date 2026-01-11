import todoIcon from "@/public/todoCricle.svg";
import { TodoDetail } from "@/types/todo";
import Image from "next/image";

export default function TodoName({ todo }: { todo: TodoDetail | null }) {
  return (
    <>
      <div className="border-2 md:max-w-3xl mx-auto lg:max-w-249 border-slate-900 gap-4 rounded-3xl flex items-center justify-center h-16">
        <Image src={todoIcon} alt="할 일 아이콘" />
        <span className="underline underline-offset-4 decoration-1 text-[20px] font-bold">
          {todo?.name}
        </span>
      </div>
    </>
  );
}
