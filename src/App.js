import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample1 from "./components/CustomHookExample1";
import CustomHookExample2 from "./components/CustomHookExample2";

function App() {
  return (
    <div className="mt-5 container">
      <UseRefExample1 />
      <UseRefExample2 />
      <UseRefExample3 />
      <UseMemoExample />
      <UseCallbackExample />
      <CustomHookExample1 />
      <CustomHookExample2 />
    </div>
  );
}

export default App;
