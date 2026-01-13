"use client";

import logoImg from "@/public/logo.svg";
import logofullImg from "@/public/logofull.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="border-b border-b-slate-200 h-15 flex items-center ">
        <div className="lg:w-300 lg:mx-auto">
          <Link href="/" className="w-fit flex items-center">
            <Image
              className="ml-4 md:ml-6 lg:ml-0 block md:hidden"
              src={logoImg}
              alt="로고 이미지"
            />
            <Image
              className="ml-4 md:ml-6 lg:ml-0 hidden md:block"
              src={logofullImg}
              alt="로고 이미지"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
