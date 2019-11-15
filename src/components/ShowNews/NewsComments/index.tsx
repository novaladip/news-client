import React from "react";
import { NewsComment } from "src/store/news/model";
import { isEmpty } from "src/common";
import { Box, Text } from "@chakra-ui/core";
import { NewsCommentItem } from "./NewsCommentItem";

interface Props {
  newsId: string;
  comments: NewsComment[];
}

export function NewsComments({ comments, newsId }: Props) {
  if (isEmpty(comments)) {
    return (
      <Box>
        <Text> There's no comment yet, be the on this!</Text>
      </Box>
    );
  }

  return (
    <Box>
      {comments.map(comment => (
        <NewsCommentItem
          key={comment.id + comment.user.id}
          newsId={newsId}
          comment={comment}
        />
      ))}
    </Box>
  );
}
