import { Box } from "@chakra-ui/react";
import logo from "./logo.svg";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Navigation from "./router/router";
import Fonts from "./Fonts";

function App() {
  const theme = extendTheme({
    colors: {
      blacky: "#0B0D17",

      bluey: "#D0D6F9",

      milky: "#FFFFFF",
    },
    fonts: {
      heading: `"Bellefair"`,
      body: `"Barlow","BarlowCondensed"`,
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box>
        <Navigation />
      </Box>
    </ChakraProvider>
  );
}

export default App;
