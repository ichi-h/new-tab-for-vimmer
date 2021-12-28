import { createContext } from "preact";
import { BookmarkTreeNode } from "../types";

interface BookmarksCtxValue {
  value: BookmarkTreeNode | undefined;
  setDirectory: (newDir: string) => void;
}

interface CurrentDirCtxValue {
  value: string;
  setCurDir: (newDir: string) => void;
}

export const BookmarksCtx = createContext<BookmarksCtxValue | undefined>(
  undefined
);

export const CurrentDirCtx = createContext<CurrentDirCtxValue | undefined>(
  undefined
);
