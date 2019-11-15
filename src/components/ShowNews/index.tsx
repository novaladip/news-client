import React, { useState, useEffect, useCallback } from "react";
import { Text, Image, Button, Stack, useToast } from "@chakra-ui/core";

import { Container, Layout, LoadingIndicator } from "../shared";
import { useStoreState, useStoreActions } from "src/store";
import "./index.css";
import { NewsComments } from "./NewsComments";
import { navigate } from "@reach/router";
import { CommentForm } from "./CommentForm";

interface Props {
  newsId: string;
}

export function ShowNews(props: Props) {
  const toast = useToast();
  const { user } = useStoreState(state => state.authentication);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const news = useStoreState(state => state.news.item);
  const fetchItem = useStoreActions(actions => actions.news.fetchItem);
  const removeNews = useStoreActions(actions => actions.news.removeNews);
  const fetchItems = useStoreActions(actions => actions.news.fetchItems);
  const handleDelete = useCallback(async () => {
    try {
      setIsDeleting(true);
      await removeNews({ id: props.newsId });
      toast({
        title: "Successfully deleting news",
        status: "success",
        position: "top"
      });
      setIsDeleting(false);
      navigate("/");
      fetchItems({ page: 1 });
    } catch (error) {
      setIsDeleting(false);
      toast({
        title: "Failed deleting news",
        status: "error",
        position: "top"
      });
    }
  }, [fetchItems, props.newsId, removeNews, toast]);

  const fetchNews = useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      await fetchItem({ id: props.newsId });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [props.newsId, fetchItem]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  if (isError) {
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Container>
      <Layout>
        {user.isAdmin === 1 && (
          <Stack
            mb={5}
            direction="row"
            d="flex"
            w="100%"
            justifyContent="space-between"
          >
            <Button
              bg="#4287f5"
              color="white"
              _hover={{ backgroundColor: "#3468ba" }}
              w="40%"
              onClick={() => navigate(`${props.newsId}/edit`)}
            >
              Edit
            </Button>
            <Button
              isLoading={isDeleting}
              loadingText="Deleting..."
              w="40%"
              bg="#fc444a"
              color="white"
              _hover={{ backgroundColor: "#c2383d" }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        )}
        <Text mb={5} fontSize="4xl">
          {news.title}
        </Text>
        <Image src={news.images} mb={5} alignSelf="center" />
        <div dangerouslySetInnerHTML={{ __html: news.body }} />
        <CommentForm newsId={props.newsId} />
        <NewsComments
          newsId={props.newsId}
          comments={news.comments ? news.comments : []}
        />
      </Layout>
    </Container>
  );
}
