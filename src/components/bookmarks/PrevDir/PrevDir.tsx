interface Props {
  dir: string;
  onSelect?: () => void;
}

export function PrevDir(props: Props) {
  return (
    <>
      <p>../</p>
    </>
  );
}
