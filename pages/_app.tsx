import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LeftMenu from "../src/components/LeftMenu";
import styled from "@emotion/styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContainer>
        <LeftMenu />
        <div
          style={{
            paddingLeft: "60px",
            paddingTop: "60px",
            paddingBottom: "60px",
          }}>
          <Component {...pageProps} />
        </div>
      </AppContainer>
    </ChakraProvider>
  );
}

export default MyApp;

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
