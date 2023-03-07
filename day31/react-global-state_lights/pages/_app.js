import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
