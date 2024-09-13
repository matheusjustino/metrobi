"use client";

import { NextPage } from "next";
import { useState } from "react";

const Page: NextPage = () => {
  const [render, setRender] = useState(["{([])}", "{([])"]);

  function checkString(s: string) {
    if (s.length === 1) return false;

    let stack = [];

    const verifyIsOpen = (char: string) => {
      return char === "(" || char === "[" || char === "{";
    };
    function verifyIsPair(char1: string, char2: string) {
      return (
        (char1 === "(" && char2 === ")") ||
        (char1 === "[" && char2 === "]") ||
        (char1 === "{" && char2 === "}")
      );
    }

    for (let i = 0; i < s.length; i++) {
      let lastStackChar = stack[stack.length - 1];

      if (verifyIsOpen(s[i])) {
        stack.push(s[i]);
      } else if (verifyIsPair(lastStackChar, s[i])) {
        stack.pop();
      } else {
        return false;
      }
    }

    return !stack.length;
  }

  const validStringBrackets = () => {
    const updatedRender = render.map((item) => {
      if (item.includes("Balanced") || item.includes("Not Balanced")) {
        return item;
      }

      const isValid = checkString(item);
      return isValid ? `${item} Balanced` : `${item} Not Balanced`;
    });

    setRender(updatedRender);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <span>String A: {render[0]}</span>
        <span>String B: {render[1]}</span>

        <button
          className="rounded-lg bg-purple-600 text-white px-4 py-2"
          onClick={validStringBrackets}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Page;
