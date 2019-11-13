import React, { useState, useCallback, FormEvent } from "react";
import { Stack, Button } from "@chakra-ui/core";
import { TextInput } from "src/components/shared";
import { SignUpDto } from "src/store/authentication/model";

interface Props {
  isLoading: boolean;
  onSubmit: (signUpDto: SignUpDto) => Promise<void>;
}

export function RegisterForm({ isLoading, onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirmation, setPasswordComfirmation] = useState("");
  const [name, setName] = useState("");

  const handleOnSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({
        email,
        password,
        name,
        password_comfirmation: passwordComfirmation
      });
    },
    [email, name, password, onSubmit, passwordComfirmation]
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
          data-testid="name-input"
          placeholder="Name"
          value={name}
          onChange={setName}
        />
        <TextInput
          data-testid="password-input"
          placeholder="Password"
          value={password}
          type="password"
          onChange={setPassword}
        />
        <TextInput
          data-testid="password-comfirmation-input"
          placeholder="Password Comfirmation"
          value={passwordComfirmation}
          type="password"
          onChange={setPasswordComfirmation}
        />
        <Button
          data-testid="signin-button"
          type="submit"
          variant="solid"
          variantColor="blue"
          isLoading={isLoading}
          loadingText="Signing Up"
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
