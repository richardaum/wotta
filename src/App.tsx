import { Box, Button, useTheme } from "@chakra-ui/react";
import { useState } from "react";
import { BsClockHistory, BsDropletHalf, BsGear } from "react-icons/bs";
import * as S from "./App.styles";
import { Theme } from "./ChakraProvider";
import { Progress } from "./Progress";

function App() {
  const [progress, setProgress] = useState(0);
  const theme = useTheme<Theme>();

  return (
    <Box>
      <S.TabList>
        <S.Tab>
          <S.TabIcon as={BsDropletHalf} />
          Início
        </S.Tab>
        <S.Tab>
          <S.TabIcon as={BsClockHistory} />
          Histórico
        </S.Tab>
        <S.Tab>
          <S.TabIcon as={BsGear} />
          Configurações
        </S.Tab>
      </S.TabList>

      <Progress progress={progress} />
      <span>{progress}%</span>
      <Button onClick={() => setProgress((p) => Math.max(0, p - 20))}>
        Decrease
      </Button>
      <Button onClick={() => setProgress((p) => Math.min(100, p + 20))}>
        Increase
      </Button>
    </Box>
  );
}

export default App;
