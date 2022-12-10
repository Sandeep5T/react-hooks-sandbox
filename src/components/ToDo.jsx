import { useState, useEffect, useRef } from "react";

function ToDo() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      });

    //Runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return loading ? <h2>Loading...</h2> : <h3>{todo.title}</h3>;
}
export default ToDo;
