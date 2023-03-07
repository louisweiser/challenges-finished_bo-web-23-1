import GlobalStyle from "../styles";
import Header from "../components/Header";
import { useState } from "react";

import Main from "../components/Main";

export default function App({ Component, pageProps }) {
  const [isLarge, setIsLarge] = useState(false);
  function handleSetIsLarge(newValue) {
    setIsLarge(newValue);
  }
  return (
    <>
      <GlobalStyle />
      <Header isLarge={isLarge} onSetIsLarge={handleSetIsLarge} />
      <Main>
        <Component {...pageProps} isLarge={isLarge} />
      </Main>
    </>
  );
}
