"use client";

import { type AppStore, makeStore } from "@/lib/store";
import { type ReactNode, useRef, useState } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState<AppStore>(makeStore);

  return <Provider store={store}>{children}</Provider>;
}
