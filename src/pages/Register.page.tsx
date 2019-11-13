import React, { useEffect } from "react";
import { DefaultRouter } from "src/types";
import { Register } from "src/components";

export default function RegisterPage(props: DefaultRouter) {
  useEffect(() => {
    document.title = "Sign Up";
  }, []);

  return <Register />;
}
