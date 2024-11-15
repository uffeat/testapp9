import { useState } from "react";
import Button from "@mui/material/Button";

export const CountButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
  );
};


