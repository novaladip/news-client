import React, { useCallback } from "react";
import { Box, Tooltip, Image } from "@chakra-ui/core";
import { navigate } from "@reach/router";

interface Props {
  id: number;
  title: string;
  image: string;
}

export function NewsCard(props: Props) {
  const handleOnClick = useCallback(() => {
    navigate(`/news/${props.id}`);
  }, [props.id]);

  return (
    <Box
      onClick={handleOnClick}
      cursor="pointer"
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <Image src={props.image} alt={props.title} w="100%" maxH="8rem" />
      <Box
        px={3}
        py={5}
        fontWeight="semibold"
        textAlign="center"
        as="h4"
        lineHeight="tight"
        isTruncated
      >
        <Tooltip label={props.title} aria-label="title">
          {props.title}
        </Tooltip>
      </Box>
    </Box>
  );
}
