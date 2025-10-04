"use client";
import { Button } from "@/components/ui/button";
import { increment, decrement } from "@/redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mt-20 max-w-7xl w-full mx-auto border border-gray-300 rounded-2xl min-h-96 bg-gray-600">
        <h1 className="text-center mt-10 text-white text-4xl">
          Count using Redux
        </h1>
        <div className="max-w-7xl gap-6 justify-between w-full flex mt-32 px-10">
          <Button
            onClick={() => dispatch(decrement())}
            className="cursor-pointer"
          >
            Decrement
          </Button>
          <p className="text-amber-50 text-xl">{count}</p>
          <Button
            onClick={() => dispatch(increment())}
            className="cursor-pointer"
          >
            Increment
          </Button>
        </div>
      </div>
    </div>
  );
}
