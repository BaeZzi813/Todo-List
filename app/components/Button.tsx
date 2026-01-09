import plusIcon from "@/public/plus.svg";
import xIcon from "@/public/x.svg";
import checkIcon from "@/public/check.svg";
import Image from "next/image";

type ButtonType = "add" | "delete" | "edit";
type ButtonSize = "small" | "large";

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
}

export default function Button({ type = "add", size = "large" }: ButtonProps) {
  const baseStyles =
    "border-2 rounded-3xl border-slate-900 shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center gap-1";

  const types = {
    add: {
      text: "추가하기",
      color: "bg-slate-200 text-slate-900",
      icon: plusIcon,
    },
    delete: {
      text: "삭제하기",
      color: "bg-rose-500 text-white",
      icon: xIcon,
    },
    edit: {
      text: "수정 완료",
      color: "bg-slate-200 text-slate-900",
      icon: checkIcon,
    },
  };

  const sizes = {
    small: "w-14 h-14",
    large: "w-42 h-14 font-bold text-[16px]",
  };

  return (
    <>
      <button className={`${baseStyles} ${types[type].color} ${sizes[size]} `}>
        <Image
          src={types[type].icon}
          alt={`${types[type].text} 아이콘`}
          width={16}
          height={16}
        />
        {size === "large" && types[type].text}
      </button>
    </>
  );
}
