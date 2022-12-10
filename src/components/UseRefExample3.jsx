import { useState } from "react";
import ToDo from "./ToDo";

function UseRefExample3() {
  const [showToDo, setShowToDo] = useState(true);
  return (
    <div>
      <h1>3. Memory Leak error Fix using useRef</h1>
      {showToDo && <ToDo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowToDo(!showToDo)}
      >
        Toggle Todo
      </button>
    </div>
  );
}

export default UseRefExample3;
