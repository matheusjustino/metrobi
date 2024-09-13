"use client";

import { NextPage } from "next";
import { useState } from "react";

const Page: NextPage = () => {
  const [duplicated, setDuplicated] = useState<string[]>([]);
  const array = [1, 1, 2, 2, 1, 3, 4, 5, 6, 5, 7, 7, 8, 9, 10, 1];

  // O(n) Solution
  const findDuplicated = () => {
    if (duplicated.length > 0) return;

    const map: Record<string, boolean> = {};

    for (let i = 0; i < array.length; i++) {
      if (map.hasOwnProperty(array[i])) {
        map[`${array[i]}`] = true;
      } else {
        map[`${array[i]}`] = false;
      }
    }

    setDuplicated(
      Object.entries(map)
        .filter((v) => v[1])
        .map((v) => v[0])
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span>Array: [{array.join(", ")}]</span>

        {duplicated.length > 0 ? (
          <span>Duplicated: [{duplicated.join(", ")}]</span>
        ) : null}

        <button
          className="rounded-lg bg-purple-600 text-white px-4 py-2"
          onClick={findDuplicated}
        >
          Find duplicated
        </button>
      </div>
    </div>
  );
};

export default Page;
