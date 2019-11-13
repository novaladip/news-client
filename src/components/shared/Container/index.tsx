import React from "react";
import { Box } from "@chakra-ui/core";

interface Props {
  children: React.ReactNode;
}

export function Container(props: Props) {
  return (
    <Box
      d="flex"
      w="100%"
      justifyContent="center"
      alignSelf="center"
      flexDirection="column"
      pb="3"
    >
      {props.children}
    </Box>
  );
}
