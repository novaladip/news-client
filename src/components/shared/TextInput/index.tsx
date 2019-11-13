import React, { FormEvent } from "react";
import { Input } from "@chakra-ui/core";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "email";
  autoFocus?: boolean;
};

export function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
  autoFocus,
  ...props
}: Props) {
  return (
    <Input
      autoFocus={autoFocus}
      data-testid="textinput"
      {...props}
      variant="outline"
      placeholder={placeholder}
      px={3}
      w="100%"
      value={value}
      type={type}
      onChange={(e: FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
      }}
    />
  );
}
