import React, { Suspense } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { AppRouter } from "src/AppRouter";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Suspense fallback={<p>Loading...</p>}>
        <AppRouter />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
