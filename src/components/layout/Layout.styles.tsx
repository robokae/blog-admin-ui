import styled from "styled-components";
import {
  STYLE_HEADER_HEIGHT,
  STYLE_MAX_CONTENT_WIDTH,
  STYLE_SPACING_LG,
} from "../../global/constants";

export const Container = styled.main`
  width: 100vw;
  max-width: ${STYLE_MAX_CONTENT_WIDTH};
  margin: 0 auto;
  margin-top: ${STYLE_HEADER_HEIGHT};
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${STYLE_SPACING_LG};
`;
