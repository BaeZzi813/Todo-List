"use client";

import { useMediaQuery } from "react-responsive";
import Button from "./components/Button";
import Searchbar from "./components/Searchbar";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px )" });
  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <div className="w-full px-4 md:px-0 mx-auto md:max-w-3xl lg:max-w-300">
          <Searchbar />
        </div>
      </div>
    </>
  );
}
