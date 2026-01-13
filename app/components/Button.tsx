import checkIcon from "@/public/check.svg";
import plusIcon from "@/public/plus.svg";
import xIcon from "@/public/x.svg";
import Image from "next/image";

type ButtonType = "add" | "delete" | "edit";

interface ButtonProps {
  type?: ButtonType;
  handleAddTodo?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
  isActive?: boolean;
}

export default function Button({
  type = "add",
  handleAddTodo,
  onEdit,
  onDelete,
  className = "",
  isActive,
}: ButtonProps) {
  const baseStyles =
    "box-border border-2 cursor-pointer rounded-3xl border-slate-900 shadow-[2px_3px_0px_0px_rgba(0,0,0,1)] flex justify-center items-center gap-1";

  const types = {
    add: {
      text: "추가하기",
      color: "bg-slate-200 text-slate-900",
      icon: plusIcon,
      showTextOnMobile: false,
      mobileWidth: "w-14",
    },
    delete: {
      text: "삭제하기",
      color: "bg-rose-500 text-white",
      icon: xIcon,
      showTextOnMobile: true,
      mobileWidth: "w-42",
    },
    edit: {
      text: "수정 완료",
      color: "bg-slate-200 text-slate-900",
      icon: checkIcon,
      showTextOnMobile: true,
      mobileWidth: "w-42",
    },
  };

  const handleClick = () => {
    switch (type) {
      case "add":
        handleAddTodo?.();
        break;
      case "edit":
        onEdit?.();
        break;
      case "delete":
        onDelete?.();
        break;
    }
  };

  const currentType = types[type];

  return (
    <>
      <button
        onClick={handleClick}
        className={`${baseStyles}  ${className} ${currentType.mobileWidth} ${
          isActive ? "bg-lime-300" : types[type].color
        } h-14 md:w-42 md:h-14 md:font-bold md:text-[16px] `}
      >
        <Image
          src={currentType.icon}
          alt={`${currentType.text} 아이콘`}
          width={16}
          height={16}
        />
        <span
          className={
            currentType.showTextOnMobile ? "inline" : "hidden md:inline"
          }
        >
          {currentType.text}
        </span>
      </button>
    </>
  );
}
