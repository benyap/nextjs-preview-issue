import React, { FC, useEffect } from "react";
import { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Log preview mode for debugging
  useEffect(() => {
    if (pageProps.preview) console.log(`Preview mode enabled.`);
  }, [pageProps]);

  return <Component {...pageProps} />;
};

export default App;
