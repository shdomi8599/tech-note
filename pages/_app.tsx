import Header from "@/components/Header";
import { CookappsProvider } from "@/context";
import { prefix } from "@/config";
import "@/styles/App.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CookappsProvider value={{ prefix }}>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </CookappsProvider>
  );
};

export default App;
