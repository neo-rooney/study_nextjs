import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div>3 Level Layout{children}</div>;
}
