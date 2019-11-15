import React, { useState, useCallback, FormEvent } from "react";
import { Stack, Button, useToast } from "@chakra-ui/core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Container, Layout, TextInput, ImageInput } from "../shared";

import { isEmpty } from "src/common";
import { useStoreActions, useStoreState } from "src/store";
import { navigate } from "@reach/router";

interface Props {
  newsId: string;
}

export function EditNews({ newsId }: Props) {
  const toast = useToast();
  const news = useStoreState(state => state.news.item);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(news.title);
  const [images, setImages] = useState(news.images);
  const [body, setBody] = useState(news.body);
  const updateNews = useStoreActions(actions => actions.news.updateNews);

  const handleOnSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        setIsLoading(true);
        e.preventDefault();
        await updateNews({
          newsId,
          data: {
            title,
            body,
            images
          }
        });
        toast({
          title: "News successfully updated",
          description: `${title} news has been updated`,
          status: "info",
          position: "top"
        });
        navigate("/");
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Failed to update news",
          status: "error",
          position: "top"
        });
      }
    },
    [toast, title, body, updateNews, newsId, images]
  );

  return (
    <Container>
      <Layout>
        <form onSubmit={handleOnSubmit}>
          <Stack spacing={5}>
            <TextInput placeholder="Title" value={title} onChange={setTitle} />
            <ImageInput result={images} setResult={setImages} />

            <ReactQuill value={body} onChange={setBody} />
            <Button
              variantColor="blue"
              isDisabled={isEmpty(images)}
              mt={5}
              type="submit"
              isLoading={isLoading}
              loadingText="Posting..."
            >
              Post
            </Button>
          </Stack>
        </form>
      </Layout>
    </Container>
  );
}
