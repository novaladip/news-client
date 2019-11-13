import React from "react";
import { Grid } from "@chakra-ui/core";

interface Props {
  children: React.ReactNode;
}

export function GridLayout(props: Props) {
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)"
      ]}
      gap={5}
    >
      {props.children}
    </Grid>
  );
}
