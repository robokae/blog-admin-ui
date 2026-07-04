import type { HTMLAttributes, PropsWithChildren } from "react";
import { Container, Content } from "./Header.styles";

export default function Header({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Container>{children}</Container>;
}

Header.Content = function ({
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <Content>{children}</Content>;
};
