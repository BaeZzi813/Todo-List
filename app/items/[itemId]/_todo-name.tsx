import doneCircleIcon from "@/public/doneCircle.svg";
import todoIcon from "@/public/todoCricle.svg";
import Image from "next/image";
import { useRef, useState } from "react";

interface TodoNameProps {
  name: string;
  isCompleted: boolean;
  handleToggleComplete: () => void;
  handleNameChange: (newName: string) => void;
}

export default function TodoName({
  name,
  isCompleted,
  handleToggleComplete,
  handleNameChange,
}: TodoNameProps) {
  const [isEditing, setIsEditing] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  const startEditing = () => {
    setIsEditing(true);
    setTimeout(() => nameRef.current?.focus(), 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <>
      <div
        className={`${
          isCompleted ? "bg-violet-200" : "bg-white"
        } border-2 md:max-w-3xl mx-auto lg:max-w-249 border-slate-900 gap-4 rounded-3xl flex items-center justify-center h-16`}
      >
        <div className="flex items-center gap-4">
          <Image
            src={isCompleted ? doneCircleIcon : todoIcon}
            alt="할 일 아이콘"
            onClick={handleToggleComplete}
            className="cursor-pointer"
          />
          <div className="w-[138px]">
            {!isEditing ? (
              <span
                onClick={startEditing}
                className="underline block underline-offset-4 decoration-1 text-[20px] font-bold"
              >
                {name}
              </span>
            ) : (
              <input
                type="text"
                value={name}
                ref={nameRef}
                onKeyDown={handleKeyDown}
                onBlur={() => setIsEditing(false)}
                onChange={(e) => handleNameChange(e.target.value)}
                className="underline w-full block underline-offset-4 decoration-1 text-[20px] font-bold outline-none"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
