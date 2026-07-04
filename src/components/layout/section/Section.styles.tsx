import { Flex } from "@robokae/robokae-ui";
import styled from "styled-components";
import { STYLE_SPACING_MD } from "../../../global/constants";

export const Container = styled(Flex)`
  padding: ${STYLE_SPACING_MD} 0;
  flex-direction: column;
  gap: ${STYLE_SPACING_MD};
`;
