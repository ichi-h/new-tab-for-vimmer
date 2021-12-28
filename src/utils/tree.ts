import { BookmarkTreeNode } from "../types";

export const getBookmarkChild = (dir: string, tree: BookmarkTreeNode) => {
  const folders = dir.split("/");

  const child = folders.reduce((acc_1, folderName) => {
    if (acc_1.children === undefined) return tree;

    const child = acc_1.children.reduce((acc_2, child) => {
      if (child.title === folderName) return child;
      return acc_2;
    }, tree);

    return child;
  }, tree);

  return child;
};
