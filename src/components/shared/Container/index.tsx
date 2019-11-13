import React from "react";
import { Box } from "@chakra-ui/core";

interface Props {
  children: React.ReactNode;
  height?: number | string;
}

export function Container(props: Props) {
  return (
    <Box
      h={props.height}
      d="flex"
      w="100%"
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
      flexDirection="column"
      pb="3"
    >
      {props.children}
    </Box>
  );
}
