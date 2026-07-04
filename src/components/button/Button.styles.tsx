import { Button } from "@robokae/robokae-ui";
import styled, { css } from "styled-components";

const baseStyles = css`
  padding: 0.75rem 2rem;
  font-size: 1rem;
`;

export const CTAButton = styled(Button)`
  ${baseStyles};
`;

export const NormalButton = styled(Button)`
  ${baseStyles};

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    background: transparent;
    color: ${({ theme }) => theme.accent};
  }
`;
