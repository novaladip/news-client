import React, { Suspense } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { StoreProvider } from "easy-peasy";

import { AppRouter } from "src/AppRouter";
import store from "src/store";
import { Navbar } from "./components";
import { InitializingPage } from "./pages/Initializing.page";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <InitializingPage />
      <ThemeProvider>
        <CSSReset />
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
