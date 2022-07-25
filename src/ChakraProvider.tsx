import {
  ChakraProvider as OriginalChakraProvider,
  extendTheme,
  Theme as ChakraTheme,
} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const styles = {
  global: {
    "body > #root": { width: "100%" },
  },
};

export const theme = extendTheme({ colors, styles });
export type Theme = ChakraTheme & { colors: typeof colors };

export const ChakraProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OriginalChakraProvider theme={theme}>{children}</OriginalChakraProvider>
  );
};

console.log(theme)
