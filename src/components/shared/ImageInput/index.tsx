import React, { useCallback, useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Image,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  useToast
} from "@chakra-ui/core";
import axios from "axios";
import { isEmpty } from "src/common";

interface Props {
  result: string;
  setResult: (value: string) => void;
}

export function ImageInput({ result, setResult }: Props) {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState<FileList>();
  const [progress, setProgress] = useState(0);

  const uploadImage = useCallback(
    async (path: FileList) => {
      try {
        setIsError(false);
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", path[0]);
        formData.append("upload_preset", "sickfits");
        const res = await axios.request({
          url: "https://api.cloudinary.com/v1_1/dwxrp75d0/image/upload/",
          method: "POST",
          data: formData,
          onUploadProgress: p => {
            setProgress(parseInt(((p.loaded / p.total) * 100).toFixed()));
          }
        });

        const file = await res.data;

        setResult(file.secure_url);
        setIsLoading(false);
        toast({
          title: "Image successfully uploaded",
          status: "success",
          position: "top"
        });
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        toast({
          title: "Failed to upload image",
          status: "error",
          position: "top"
        });
      }
    },
    [setResult, toast]
  );

  useEffect(() => {
    if (!isEmpty(image)) {
      uploadImage(image as FileList);
    }
  }, [image]);

  return (
    <Box
      mb={5}
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      pr="3"
    >
      <FormControl d="flex" flexDirection="column">
        <FormLabel>Image</FormLabel>

        <input
          type="file"
          placeholder="Upload an image"
          accept="image/*"
          onChange={e => setImage(e.target.files as FileList)}
        />
        {isError && (
          <FormHelperText color="#f20f0f">
            Failed to upload image, please try again.
          </FormHelperText>
        )}
      </FormControl>

      {!isEmpty(result) && !isLoading && <Image size="50px" src={result} />}

      {isLoading && (
        <CircularProgress value={progress} size="50px">
          <CircularProgressLabel>{progress}%</CircularProgressLabel>
        </CircularProgress>
      )}
      {isError && (
        <Button onClick={() => uploadImage(image as FileList)}>Retry</Button>
      )}
    </Box>
  );
}
