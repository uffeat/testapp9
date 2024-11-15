import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client.js'
import {App} from './App.jsx'
import './index.css'
import { server } from "@/utils/server";

// Test server
await (async () => {
  const result = await server.foo({ letters: ["a", "b", "c"] });
  console.dir(result);
})();
await (async () => {
  const result = await server.bar();
  console.dir(result);
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
