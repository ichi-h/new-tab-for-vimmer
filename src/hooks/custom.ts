import { useState } from "preact/hooks";

import { BookmarkTreeNode } from "../types";
import { getBookmarkChild } from "../utils/tree";

export const useBookmarksState = () => {
  const [bookmarks, setBookmarks] = useState<BookmarkTreeNode | undefined>(
    undefined
  );

  const setDirectory = (dir: string) => {
    chrome.bookmarks.getTree((tree) => {
      const child = getBookmarkChild(dir, tree[0]);
      setBookmarks(child);
    });
  };

  return { bookmarks, setDirectory };
};
