import { CSSObject } from "@chakra-ui/react";

const hasMouseDevice = () => {
  return (
    !("ontouchstart" in document.documentElement) &&
    navigator.maxTouchPoints === 0
  );
};

export const hover = (styles: CSSObject) => {
  return {
    _hover: hasMouseDevice() ? styles : {},
  };
};
