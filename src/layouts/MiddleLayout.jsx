import { useContext, useState } from "react";
import Products from "../components/Products";
import MiddleProductDetile from "./MiddleProductDetile";
import LayoutContext from "../contexts/LayoutContext";

function MiddleLayout() {
  const { isProductDetile } = useContext(LayoutContext);
  return (
    <div className="w-full h-full border-x flex justify-center flex-col items-center px-3 border-zinc-700">
      <input
        type="text"
        placeholder="Hai Muhammad Abduh, Cari inspirasi ?"
        className="w-full my-3 bg-zinc-900 border-x-2 text-sm border-zinc-700 p-1 text-center outline-none"
      />
      <div className="h-full w-full overflow-y-scroll">
        {isProductDetile ? <MiddleProductDetile /> : <Products />}
      </div>
    </div>
  );
}

export default MiddleLayout;
