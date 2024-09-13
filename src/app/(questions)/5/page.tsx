import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div className="flex flex-col gap-3 w-1/3 text-justify">
      <h1 className="underline">Puzzle 2 Eggs and 100 Floors</h1>

      <p> Let's start by dropping the first egg from the xth floor.</p>

      <ul>
        <li className="list-disc">
          If the egg breaks, we'll check the floors below one by one. In the
          worst case, this will take up to x drops.
        </li>

        <li className="list-disc">
          If the egg doesn’t break, we move up by <strong>(x-1)</strong> floors
          next. This is because we’ve already used one drop and want to keep the
          total number of drops to x. So, the next floor to try is{" "}
          <strong>x + (x-1)</strong>.
        </li>

        <li className="list-disc">
          If the egg still doesn’t break, we move up by <strong>(x-2)</strong>{" "}
          floors, to the floor <strong>x + (x-1) + (x-2)</strong>. We continue
          this pattern, decreasing the number of floors we jump each time.
        </li>
      </ul>

      <p>
        The goal is to make our jumps decrease each time: first by (x-1), then
        (x-2), and so on, until we reach the 100th floor.
      </p>

      <p>
        So, the sum of these jumps should equal 100:
        <br />
        <strong>x+(x−1)+(x−2)+(x−3)+...+1 = 100</strong>
        <br />
        This sum can be calculated using the formula for the sum of the first x
        numbers:
        <br />
        <strong>
          x(x+1)2 = 100
          <br />
          2x(x+1) ​= 100
        </strong>
        <br />
        Solving this gives us: <strong>x = 13.651</strong>
        <br />
        <br />
        We round up to 14. Therefore, we start by dropping the first egg from
        the 14th floor. If the egg breaks on the 14th floor, we test the floors
        from 1 to 13, one by one. If the egg doesn’t break, we move to the 27th
        floor (14 + 13). If the egg breaks on the 27th floor, we test the floors
        from 15 to 26. If the egg doesn’t break on the 27th floor, we go to the
        39th floor, and so on.
      </p>
    </div>
  );
};

export default Page;
