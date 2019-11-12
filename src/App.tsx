import React, { Suspense } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { StoreProvider } from "easy-peasy";

import { AppRouter } from "src/AppRouter";
import store from "src/store";

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <CSSReset />
        <Suspense fallback={<p>Loading...</p>}>
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
