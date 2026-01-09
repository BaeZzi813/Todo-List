"use client";

import { useMediaQuery } from "react-responsive";
import Button from "./Button";

export default function Searchbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px )" });
  return (
    <>
      <div className="flex gap-2 md:gap-4 pt-4">
        <input
          className="pl-6 flex-1 border-2 rounded-3xl border-slate-900 shadow-[2px_3px_0px_0px_rgba(0,0,0,1)]"
          placeholder="할 일을 입력해주세요"
        />
        {isMobile ? <Button size="small" /> : <Button />}
      </div>
    </>
  );
}
