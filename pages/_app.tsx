import Header from "@/components/Header";
import "@/styles/App.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;
