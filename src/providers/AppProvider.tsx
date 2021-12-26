interface Props {
  children: preact.ComponentChildren;
}

export function AppProvider({ children }: Props) {
  return <>{children}</>;
}
