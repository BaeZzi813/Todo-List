import ImageButton from "@/app/components/ImageButton";
import imgIcon from "@/public/img.svg";
import { postImage } from "@/services/todoService";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";

interface TodoImageProps {
  imageUrl: string;
  handleImageChange: (url: string) => void;
}

const isValideImageUrl = (url: string | null | undefined) => {
  if (!url) return false;
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("blob:")
  );
};

export default function TodoImage({
  imageUrl,
  handleImageChange,
}: TodoImageProps) {
  const [displayImage, setDisplayImage] = useState<string | null>(null);

  useEffect(() => {
    const cleanUrl = imageUrl?.trim();
    if (isValideImageUrl(cleanUrl)) {
      setDisplayImage(cleanUrl);
    } else {
      setDisplayImage(null);
    }
  }, [imageUrl]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExtension = file.name.split(".").pop();
    const newFileName = `image_${Date.now()}.${fileExtension}`;
    const newFile = new File([file], newFileName, { type: file.type });

    const preview = URL.createObjectURL(file);
    setDisplayImage(preview);

    try {
      const response = await postImage(newFile);
      console.log("서버 업로드 결과:", response);
      handleImageChange(response.url);
    } catch (error) {
      console.error("이미지 업로드 실패", error);
    }
  };

  return (
    <>
      <label
        className={`cursor-pointer h-[311px] lg:w-[384px] md:max-w-3xl mx-auto lg:mx-0 relative mt-4 flex justify-center items-center rounded-3xl overflow-hidden ${
          displayImage
            ? "border-none"
            : "border-dashed border-slate-300 border-2 "
        }`}
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        {displayImage ? (
          <Image
            src={
              displayImage.startsWith("http")
                ? decodeURIComponent(displayImage)
                : displayImage
            }
            fill
            alt="사진 미리보기"
            className="object-fill"
          />
        ) : (
          <Image src={imgIcon} alt="이미지 등록 아이콘" />
        )}
        <ImageButton
          type={displayImage ? "edit" : "plus"}
          className="absolute right-4 bottom-4 pointer-events-none"
        />
      </label>
    </>
  );
}
