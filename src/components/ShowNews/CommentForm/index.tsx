import React, { useState, useCallback, ChangeEvent } from "react";
import { Box, Text, Textarea, Button, useToast } from "@chakra-ui/core";
import { useStoreState, useStoreActions } from "src/store";

interface Props {
  newsId: string;
}

export function CommentForm({ newsId }: Props) {
  const toast = useToast();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useStoreState(state => state.authentication);
  const addComment = useStoreActions(actions => actions.news.addComment);

  const handleOnPost = useCallback(async () => {
    try {
      setIsLoading(true);
      await addComment({ newsId, text });
      setIsLoading(false);
      setText("");
      toast({
        title: "Successfully adding ur comment",
        status: "success",
        position: "bottom-right"
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Failed to add comments",
        description: "Please try again later...",
        status: "error",
        position: "bottom-left"
      });
    }
  }, [toast, addComment, newsId, text]);

  return (
    <Box my={10}>
      {!isAuthenticated && (
        <Text my={10} textAlign="center" fontWeight="extrabold">
          Please login first to leave a comments...
        </Text>
      )}
      <Textarea
        isDisabled={!isAuthenticated}
        placeholder="Leave what u think here"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <Button
        isDisabled={!isAuthenticated}
        my={5}
        w="100%"
        variant="outline"
        variantColor="orange"
        loadingText="Posting..."
        onClick={handleOnPost}
        isLoading={isLoading}
      >
        Post
      </Button>
    </Box>
  );
}
