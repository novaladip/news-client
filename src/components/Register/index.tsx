import React, { useCallback, useState } from "react";
import { Box, Image, useToast } from "@chakra-ui/core";

import LoginIcon from "./assets/login_icon.svg";
import { Container } from "src/components/shared";
import { RegisterForm } from "./RegisterForm";
import { SignUpDto } from "src/store/authentication/model";
import { useStoreActions } from "src/store";

export function Register() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const signUp = useStoreActions(actions => actions.authentication.signUp);

  const onSubmit = useCallback(
    async (signInDto: SignUpDto) => {
      try {
        setIsLoading(true);
        await signUp(signInDto);
        setIsLoading(false);
        toast({
          title: "Register successfully",
          status: "success",
          position: "top"
        });
      } catch (error) {
        toast({
          title: "Register failure",
          status: "error",
          position: "top"
        });
        setIsLoading(false);
      }
    },
    [signUp, toast]
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
        <Image src={LoginIcon} h="30vh" marginBottom={10} />
        <RegisterForm isLoading={isLoading} onSubmit={onSubmit} />
      </Box>
    </Container>
  );
}
