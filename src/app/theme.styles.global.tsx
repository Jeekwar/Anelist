import { extendTheme } from "@chakra-ui/react";
import "./globals.css";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.300",
        background: "#000",
        fontFamily: "'Raleway'",
      },
    },
  },
  colors: {
    primary: {
      "900": "#ae2012",
    },
  },
});

export default customTheme;
