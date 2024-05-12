import { useState } from "react";
import { Button, Container } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <h1>Vite + React + Typescript + Mantine</h1>
      <div>
        <Button
          variant="gradient"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </Container>
  );
}

export default App;
