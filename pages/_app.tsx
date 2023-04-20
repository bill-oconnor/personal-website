import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (loaderRef.current) loaderRef.current.classList.add("loader-loaded");
    }, 1000);
  }, []);

  return (
    <>
      <div ref={loaderRef} className="loader" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
