import React, { useState, useCallback } from "react";
import { NewsComment } from "src/store/news/model";
import { Flex, Avatar, Box, Button, Text, useToast } from "@chakra-ui/core";
import { useStoreState, useStoreActions } from "src/store";

interface Props {
  comment: NewsComment;
  newsId: string;
}

export function NewsCommentItem({ comment, newsId }: Props) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { sub } = useStoreState(state => state.authentication.user);
  const deleteComment = useStoreActions(actions => actions.news.deleteComment);

  const handleOnDelete = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteComment({ commentId: comment.id, newsId });

      toast({
        title: "Comment has been deleted",
        status: "success",
        position: "bottom-right"
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Failed to delete comment",
        status: "error",
        position: "bottom-left"
      });
    }
  }, [toast, deleteComment, newsId, comment.id]);

  return (
    <Flex my={5}>
      <Avatar name={comment.user.name} />
      <Box ml="3">
        <Text fontWeight="bold">{comment.user.name}</Text>
        <Text fontSize="sm">{comment.text}</Text>
        {sub === comment.user_id && (
          <Button
            onClick={handleOnDelete}
            isLoading={isLoading}
            loadingText="Deleting..."
            mt={3}
            size="sm"
            variant="solid"
            bg="#f54242"
            color="white"
            _hover={{ backgroundColor: "#b83333" }}
          >
            Delete
          </Button>
        )}
      </Box>
    </Flex>
  );
}
