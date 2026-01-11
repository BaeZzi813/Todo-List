import editIcon from "@/public/edit.svg";
import plusImageIcon from "@/public/plusImage.svg";
import Image from "next/image";

type ButtonType = "plus" | "edit";

interface ImageButtonProps {
  type: ButtonType;
  className: string;
}

export default function ImageButton({
  type = "plus",
  className,
}: ImageButtonProps) {
  const baseStyles = "w-16 h-16 rounded-full flex justify-center";

  const types = {
    plus: {
      color: "bg-slate-200",
      icon: plusImageIcon,
    },
    edit: {
      color: "border-2 border-slate-900 bg-slate-900/50",
      icon: editIcon,
    },
  };
  return (
    <>
      <button className={`${baseStyles} ${types[type].color} ${className}`}>
        <Image src={types[type].icon} alt="사진 추가 아이콘" />
      </button>
      <div className=""></div>
    </>
  );
}
