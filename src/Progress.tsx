import { Box, Flex, useTheme, layout } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { SVGProps } from "react";
import { Theme } from "./ChakraProvider";

const size = 500;
const circleSize = size * 0.7;

const Fill = styled.path`
  transition: stroke-dashoffset 1s ease;
`;

const Svg = styled.svg`
  width: ${size}px;
  margin: auto;
  flex-shrink: 0;
`;

const OFFSET = 471;
const MAX_PERCENT = 100;

export const Progress = (props: SVGProps<SVGSVGElement> & { progress: number }) => {
  const theme = useTheme<Theme>();
  const offset = -1 * OFFSET + (OFFSET / MAX_PERCENT) * props.progress;
  const strokeWidth = "3px";

  return (
    <Flex position="relative" justifyContent="center">
      <Svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M292 146C292 67.5756 228.424 4 150 4C71.5756 4 8 67.5756 8 146"
          stroke="lightgray"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <Fill
          d="M292 146C292 67.5756 228.424 4 150 4C71.5756 4 8 67.5756 8 146"
          stroke={theme.colors.brand[700]}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray={OFFSET}
          strokeDashoffset={offset}
        />
      </Svg>

      <Flex
        position="absolute"
        bottom={size + circleSize}
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.25);"
        borderRadius="100%"
        width={circleSize}
        height={circleSize}
        alignItems="center"
        justifyContent="center"
        flexShrink="0"
      >
        teste
      </Flex>
    </Flex>
  );
};
