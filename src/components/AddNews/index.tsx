import React, { useState, useCallback, FormEvent } from "react";
import { Stack, Button, useToast } from "@chakra-ui/core";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Container, Layout, TextInput, ImageInput } from "../shared";

import { isEmpty } from "src/common";
import { useStoreActions } from "src/store";

export function AddNews() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");
  const [body, setBody] = useState("");
  const addNews = useStoreActions(actions => actions.news.addNews);

  const handleOnSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        setIsLoading(true);
        e.preventDefault();
        await addNews({ title, images, body });
        toast({
          title: "News successfully added",
          description: `${title} news has been added`,
          status: "success",
          position: "top"
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "Failed to add news",
          status: "error",
          position: "top"
        });
      }
    },
    [toast, title, images, body, addNews]
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
