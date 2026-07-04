import styled from "styled-components";
import {
  STYLE_HEADER_HEIGHT,
  STYLE_MAX_CONTENT_WIDTH,
} from "../../global/constants";

export const Container = styled.div`
  width: 100vw;
  height: ${STYLE_HEADER_HEIGHT};
  border-bottom: 1px solid ${({ theme }) => theme.line};
  background-color: ${({ theme }) => theme.background.secondary};
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${STYLE_MAX_CONTENT_WIDTH};
`;
