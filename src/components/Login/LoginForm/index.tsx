import React, { useState, useCallback, FormEvent } from "react";
import { Stack, Button } from "@chakra-ui/core";
import { TextInput } from "src/components/shared";
import { SignInDto } from "src/store/authentication/model";

interface Props {
  isLoading: boolean;
  onSubmit: (signInDto: SignInDto) => Promise<void>;
}

export function LoginForm({ isLoading, onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({
        email,
        password
      });
    },
    [email, password, onSubmit]
  );

  return (
    <form onSubmit={handleOnSubmit}>
      <Stack spacing={5} w="100%">
        <TextInput
          data-testid="email-input"
          placeholder="Email"
          value={email}
          onChange={setEmail}
        />
        <TextInput
          data-testid="password-input"
          placeholder="Password"
          value={password}
          type="password"
          onChange={setPassword}
        />
        <Button
          data-testid="signin-button"
          type="submit"
          variant="solid"
          variantColor="blue"
          isLoading={isLoading}
          loadingText="Signing In"
        >
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
