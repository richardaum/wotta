import { Flex, Icon, styled } from "@chakra-ui/react";
import { hover } from "./hover";

export const TabList = styled(Flex, {
  baseStyle: {
    bgColor: "brand.700",
    width: "100%",
  },
});

export const Tab = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    flex: "1 1 0",
    padding: "2",
    cursor: "pointer",
    ...hover({ bg: "blue.800" }),
  },
});

export const TabIcon = styled(Icon, {
  baseStyle: {
    fill: "white",
    mr: "3",
    mt: "1px",
    sx: {
      path: { stroke: "currentColor" },
    },
  },
});
