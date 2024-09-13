"use client";

import { NextPage } from "next";
import { useState } from "react";

const Page: NextPage = () => {
  const [render, setRender] = useState("");
  const array = ["a", "b", "c", "d", "e"];

  const renderItems = () => {
    array.forEach((item, idx) => {
      setTimeout(() => {
        setRender(item);
      }, 2 ** idx * 1000);
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span>Array: [{array.join(", ")}]</span>

        {render.length > 0 ? <span>Render: [{render}]</span> : null}

        <button
          className="rounded-lg bg-purple-600 text-white px-4 py-2"
          onClick={renderItems}
        >
          Render
        </button>
      </div>
    </div>
  );
};

export default Page;
