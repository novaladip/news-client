import React, { useState, useCallback } from "react";
import { Box, Image, useToast } from "@chakra-ui/core";

import LoginIcon from "./assets/login_icon.svg";
import { Container } from "src/components/shared";
import { SignInDto } from "src/store/authentication/model";
import { useStoreActions } from "src/store";
import { LoginForm } from "./LoginForm";

export function Login() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const signIn = useStoreActions(actions => actions.authentication.signIn);

  const onSubmit = useCallback(
    async (signInDto: SignInDto) => {
      try {
        setIsLoading(true);
        await signIn(signInDto);
        setIsLoading(false);
        toast({
          title: "Sign in successfully",
          status: "success",
          position: "top"
        });
      } catch (error) {
        toast({
          title: "Invalid credentials",
          status: "error",
          position: "top"
        });
        setIsLoading(false);
      }
    },
    [signIn, toast]
  );

  return (
    <Container height="90vh">
      <Box
        flexDirection="column"
        d="flex"
        w={["95%", "60%", "50%", "40%"]}
        borderWidth="1px"
        rounded="lg"
        p={["5", "7", "9", "11"]}
      >
        <Image alt="login icon" src={LoginIcon} h="30vh" marginBottom={10} />
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
      </Box>
    </Container>
  );
}
