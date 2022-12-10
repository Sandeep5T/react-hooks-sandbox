import { useRef, useEffect, useState } from "react";

function useRefExample2() {
  const [name, setName] = useState("");
  const renders = useRef(1);
  const prevName = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>2. Get Previous State using useRef</h1>
      <h2>Renders: {renders.current}</h2>
      <input
        type="text"
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Previously you entered: {prevName.current}</h3>
    </div>
  );
}

export default useRefExample2;
