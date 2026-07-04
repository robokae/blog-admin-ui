import type { ReactNode } from "react";
import { Container } from "./Section.styles";

export default function Section({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
