import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Container, Layout, TextInput, ImageInput } from "../shared";
import { Stack, Button } from "@chakra-ui/core";
import { isEmpty } from "src/common";

export function AddNews() {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");
  const [body, setBody] = useState("");

  return (
    <Container>
      <Layout>
        <Stack spacing={5}>
          <TextInput placeholder="Title" value={title} onChange={setTitle} />
          <ImageInput result={images} setResult={setImages} />

          <ReactQuill value={body} onChange={setBody} />
          <Button isDisabled={isEmpty(images)} mt={5}>
            Post
          </Button>
        </Stack>
      </Layout>
    </Container>
  );
}
