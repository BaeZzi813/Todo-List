"use client";

import Image from "next/image";
import logofullImg from "@/public/logofull.svg";
import logoImg from "@/public/logo.svg";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px )" });
  return (
    <>
      <div className="border-b border-b-slate-200 h-15 flex items-center ">
        <div className="lg:w-300 lg:mx-auto">
          <Link href="/">
            <Image
              className="h-10 ml-4 md:ml-6 lg:ml-0"
              src={isMobile ? logoImg : logofullImg}
              alt="로고 이미지"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
