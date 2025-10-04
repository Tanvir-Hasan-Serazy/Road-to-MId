"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Todo = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data === "") return;
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div>
        <h1 className="text-3xl font-bold text-rose-500 pb-10">
          Add your Todos Here
        </h1>
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Textarea
              {...register("todo")}
              className="mb-4 focus-visible:ring-rose-300 border border-rose-300"
            />
            {errors.todo && <span className="text-rose-300">Add Todo</span>}
            <Button
              type="submit"
              variant="destructive"
              className="cursor-pointer"
            >
              Add Todo
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
