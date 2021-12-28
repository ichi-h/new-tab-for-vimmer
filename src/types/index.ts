export type BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

export interface Shortcut {
  title: string;
  url: string;
  key: string;
}

export interface Config {
  shortcuts: Shortcut[];
  iconSize: "small" | "medium" | "large";
  iconRedius: number;
  mainColor: string;
  subColor: string;
  fontColor: string;
  fontSize: string;
  defaultDirectory: string;
  keepPreviousFolder: boolean;
}
