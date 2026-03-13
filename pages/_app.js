import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { InquiryCartProvider } from "@/lib/InquiryCartContext";

export default function App({ Component, pageProps }) {
  return (
    <InquiryCartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </InquiryCartProvider>
  );
}
