import { useContext } from "preact/hooks";

import { BookmarkItem, Folder, PrevDir } from "..";

import { BookmarksCtx, CurrentDirCtx } from "../../../providers";

export function Bookmarks() {
  const bookmarks = useContext(BookmarksCtx)!;
  const curDir = useContext(CurrentDirCtx)!;

  if (bookmarks.value === undefined) {
    return <></>;
  }

  let nodes = [<PrevDir dir={curDir.value} />].concat(
    bookmarks.value!.children!.map((child) => {
      if (child.children === undefined) {
        return <BookmarkItem title={child.title} url={child.url!} />;
      }
      return (
        <Folder title={child.title} dir={`${curDir.value}/${child.title}`} />
      );
    })
  );

  return <>{nodes}</>;
}
