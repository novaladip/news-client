import React, { Suspense } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { StoreProvider } from "easy-peasy";

import { AppRouter } from "src/AppRouter";
import store from "src/store";
import { Navbar, LoadingIndicator } from "./components";
import { InitializingPage } from "./pages/Initializing.page";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <InitializingPage />
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Navbar />
        <Suspense fallback={<LoadingIndicator />}>
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
