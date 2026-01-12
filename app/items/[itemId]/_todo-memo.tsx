import memoImg from "@/public/memo.svg";
import Image from "next/image";
import { useRef, useState } from "react";

interface TodoMemoProps {
  memo: string;
  handleMemoChange: (newMemo: string) => void;
}

export default function TodoMemo({ memo, handleMemoChange }: TodoMemoProps) {
  const [isEditing, setIsEditing] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const startEditing = () => {
    setIsEditing(true);
    setTimeout(() => textareaRef.current?.focus(), 0);
  };
  return (
    <>
      <div className="relative md:max-w-3xl mx-auto lg:mx-0 mt-3.5 h-[311px] lg:w-147">
        <Image
          fill
          src={memoImg}
          alt="메모 이미지"
          className="rounded-3xl object-none md:object-cover"
        />
        <div className="absolute top-6 inset-x-0 mx-auto flex flex-col items-center">
          <span className="text-amber-800 font-extrabold">Memo</span>
        </div>
        {!isEditing ? (
          <div
            onClick={startEditing}
            className="absolute memo-scroll top-14 left-4 right-4 resize-none h-57.25"
          >
            {memo}
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            value={memo}
            onChange={(e) => handleMemoChange(e.target.value)}
            onBlur={() => setIsEditing(false)}
            className="absolute memo-scroll top-14 left-4 right-4 resize-none h-57.25"
          />
        )}
      </div>
    </>
  );
}
