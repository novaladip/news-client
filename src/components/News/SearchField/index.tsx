import React, { useState, useCallback, FormEvent } from "react";
import { TextInput } from "src/components/shared";
import {
  Box,
  IconButton,
  InputGroup,
  InputRightElement,
  useToast
} from "@chakra-ui/core";

interface Props {
  onSubmit: (search?: string) => Promise<void>;
}

export function SearchField(props: Props) {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleOnSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        await props.onSubmit(value);
        setIsLoading(false);
      } catch (error) {
        toast({ title: `Failed to search: ${value}`, status: "warning" });
        setIsLoading(false);
      }
    },
    [value, toast, props]
  );

  return (
    <Box mb={5}>
      <form onSubmit={handleOnSubmit}>
        <InputGroup>
          <TextInput
            placeholder="Type here to search news"
            value={value}
            onChange={setValue}
          />
          <InputRightElement>
            <IconButton
              type="submit"
              isLoading={isLoading}
              icon="search"
              aria-label="Search database"
              variantColor="blue"
            />
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
}
