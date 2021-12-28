interface Props {
  title: string;
  url: string;
}

export function BookmarkItem(props: Props) {
  return (
    <>
      <p>
        {props.title}: {props.url}
      </p>
    </>
  );
}
