import memoImg from "@/public/memo.svg";
import Image from "next/image";

export default function TodoMemo() {
  return (
    <>
      <div className="relative md:max-w-3xl mx-auto mt-3.5 h-[311px] lg:w-147">
        <Image
          fill
          src={memoImg}
          alt="메모 이미지"
          className="rounded-3xl object-none md:object-cover"
        />
        <div className="absolute top-6 inset-x-0 mx-auto flex flex-col items-center">
          <span className="text-amber-800 font-extrabold">Memo</span>
        </div>
      </div>
    </>
  );
}
