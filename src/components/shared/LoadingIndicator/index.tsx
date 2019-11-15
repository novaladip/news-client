import React from "react";
import { Box, CircularProgress } from "@chakra-ui/core";

export function LoadingIndicator() {
  return (
    <Box
      w="100%"
      h={"70vh"}
      p={4}
      d="flex"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress isIndeterminate size="150px" />
    </Box>
  );
}
