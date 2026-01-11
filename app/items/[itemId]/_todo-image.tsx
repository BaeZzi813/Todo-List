import ImageButton from "@/app/components/ImageButton";
import imgIcon from "@/public/img.svg";
import Image from "next/image";

export default function TodoImage() {
  return (
    <>
      <div className="h-[311px] lg:w-[384px] md:max-w-3xl mx-auto relative mt-4 border-2 border-dashed flex justify-center items-center border-slate-300 rounded-3xl">
        <Image src={imgIcon} alt="이미지 등록 아이콘" />
        <ImageButton type="plus" className="absolute right-4 bottom-4" />
      </div>
    </>
  );
}
