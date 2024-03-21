import { useState } from "react";

export default function Button() {
  const [state, setState] = useState(0);
  return (
    <>
      <button onClick={() => setState(state + 1)}>Click me</button>
      <p>{state}</p>
    </>
  );
}
