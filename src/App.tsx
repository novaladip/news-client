import React, { Suspense } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { StoreProvider } from "easy-peasy";

import { AppRouter } from "src/AppRouter";
import store from "src/store";
import { Navbar } from "./components";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
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
