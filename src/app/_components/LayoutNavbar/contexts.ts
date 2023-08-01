import { type CSSProperties, createContext } from "react";

export const LayoutContext = createContext<{width: CSSProperties["width"]}>({
  width: 0,
});
