import { useEffect } from "react";
import { useState, useEFfect, useRef, useMemo } from "react";

function getSqrt(num) {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
  console.log("Expensive Function called");
  return Math.sqrt(num);
}

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <h1>UseMemoExample</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="form-control w-25"
      />
      <h2>
        The Square root of {number} is {sqrt}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
}

export default UseMemoExample;
