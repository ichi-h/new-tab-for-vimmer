interface Props {
  title: string;
  dir: string;
}

export function Folder(props: Props) {
  return (
    <>
      <p>{props.title}/</p>
    </>
  );
}
