"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { addTodo, removeTodo } from "@/redux/slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const todoText = data.todo?.trim();
    if (!todoText) return; // ignore empty input
    dispatch(addTodo(todoText));
    reset();
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-3xl font-bold text-rose-500 pb-10">
        Add your Todos Here
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          {...register("todo", { required: true })}
          className="mb-4 focus-visible:ring-rose-300 border border-rose-300"
        />
        {errors.todo && <span className="text-rose-300">Add Todo</span>}
        <Button type="submit" className="bg-rose-500 hover:bg-rose-700">
          Add Todo
        </Button>
      </form>

      <div className="mt-6 space-y-2">
        {todos.map((t) => (
          <div
            key={t.id}
            className="flex justify-between items-center border p-2 rounded-md"
          >
            <span className="text-black">{t.text}</span>
            <Button variant="destructive" onClick={() => handleDelete(t.id)}>
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
