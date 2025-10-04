import Counter from "@/components/Counter";
import Todo from "@/components/Todo";
import ReduxProvider from "@/redux/provider/redux-provider";

export default function Home() {
  return (
    <>
      <ReduxProvider>
        {/* <Counter /> */}
        <Todo />
      </ReduxProvider>
    </>
  );
}
