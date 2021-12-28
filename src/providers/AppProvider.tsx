import { useState, useEffect } from "preact/hooks";

import { ConfigDB } from "../db";
import { useBookmarksState } from "../hooks";
import { BookmarksCtx, CurrentDirCtx } from "./context";

interface Props {
  children: preact.ComponentChildren;
}

export function AppProvider({ children }: Props) {
  let config = new ConfigDB();
  const dir = config.getItem("defaultDirectory") as string;

  const [curDir, setCurDir] = useState(dir);
  const { bookmarks, setDirectory } = useBookmarksState();

  useEffect(() => {
    if (bookmarks === undefined) setDirectory(curDir);
  }, [bookmarks]);

  return (
    <CurrentDirCtx.Provider value={{ value: curDir, setCurDir: setCurDir }}>
      <BookmarksCtx.Provider
        value={{ value: bookmarks, setDirectory: setDirectory }}
      >
        {children}
      </BookmarksCtx.Provider>
    </CurrentDirCtx.Provider>
  );
}
