import Counter from "@/components/Counter";
import ReduxProvider from "@/redux/provider/redux-provider";

export default function Home() {
  return (
    <>
      <ReduxProvider>
        <h1>Practice Mode on</h1>
        <Counter />
      </ReduxProvider>
    </>
  );
}
