"use client";

import { useMediaQuery } from "react-responsive";
import Button from "./Button";
import { useState } from "react";
import { postTodos } from "@/services/todoService";

export default function Searchbar({ onSubmit }: { onSubmit: () => void }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px )" });

  const [text, setText] = useState("");

  const handleAddTodo = async () => {
    if (!text.trim()) return;

    try {
      await postTodos(text);
      setText("");
      onSubmit();
    } catch (error) {
      console.error("fail to add todo", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <>
      <div className="flex gap-2 md:gap-4 pt-4">
        <input
          value={text}
          onKeyDown={handleKeyDown}
          onChange={(e) => setText(e.target.value)}
          className="pl-6 focus:outline-none flex-1 border-2 rounded-3xl border-slate-900 shadow-[2px_3px_0px_0px_rgba(0,0,0,1)]"
          placeholder="할 일을 입력해주세요"
        />
        <Button onClick={handleAddTodo} size={isMobile ? "small" : "large"} />
      </div>
    </>
  );
}
