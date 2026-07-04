import type { ButtonProps as BtnProps } from "@robokae/robokae-ui";
import type { ReactNode } from "react";
import { Link, type LinkProps } from "@tanstack/react-router";
import { CTAButton, NormalButton } from "./Button.styles";

interface ButtonProps
  extends Omit<BtnProps, "children">, Omit<LinkProps, "children"> {
  as?: "cta" | "default";
  children?: ReactNode;
}

const Btn = ({ as = "default", ...props }: ButtonProps) =>
  as === "cta" ? (
    <CTAButton variant="filled" colorScheme="accent" {...props}>
      {props?.children}
    </CTAButton>
  ) : (
    <NormalButton variant="outline" colorScheme="accent" {...props}>
      {props?.children}
    </NormalButton>
  );

export default function Button({ to, ...props }: ButtonProps) {
  return to ? (
    <Link to={to}>
      <Btn {...props} />
    </Link>
  ) : (
    <Btn {...props} />
  );
}
