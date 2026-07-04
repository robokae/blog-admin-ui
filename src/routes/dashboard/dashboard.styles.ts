import { Link } from "@tanstack/react-router";
import styled from "styled-components";

export const LinkButton = styled(Link)`
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.button.accent.background};
  color: ${({ theme }) => theme.button.accent.foreground.primary};
  text-decoration: none;
  border-radius: 0.25rem;
`;
