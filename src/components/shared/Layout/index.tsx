import React from "react";
import { Box } from "@chakra-ui/core";

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  return (
    <Box
      w={["95%", "75%", "70%", "60%"]}
      justifyContent="center"
      mt="5"
      alignSelf="center"
    >
      {props.children}
    </Box>
  );
}
