"use client";

import logoImg from "@/public/logo.svg";
import logofullImg from "@/public/logofull.svg";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px )" });
  return (
    <>
      <div className="border-b border-b-slate-200 h-15 flex items-center ">
        <div className="lg:w-300 lg:mx-auto">
          <Link href="/" className="w-fit flex items-center">
            <Image
              className="ml-4 md:ml-6 lg:ml-0"
              src={isMobile ? logoImg : logofullImg}
              alt="로고 이미지"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
