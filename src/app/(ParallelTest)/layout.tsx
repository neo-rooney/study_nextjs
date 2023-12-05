import { ReactNode } from "react";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div>
      2 Level Layout
      {children}
      {modal}
    </div>
  );
}
