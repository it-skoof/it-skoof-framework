import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootContainer = document.querySelector('#root') as Element;

const root = createRoot(rootContainer);

root.render(<App/>)