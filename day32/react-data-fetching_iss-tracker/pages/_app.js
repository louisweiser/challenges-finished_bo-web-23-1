import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 10000,
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
