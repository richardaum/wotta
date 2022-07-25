import { Helmet, HelmetProvider } from "react-helmet-async";

export const Metadata = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My Title</title>
        <meta charSet="utf-8" />
      </Helmet>
    </HelmetProvider>
  );
};
