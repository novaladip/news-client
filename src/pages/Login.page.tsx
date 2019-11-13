import React, { useEffect } from "react";
import { DefaultRouter } from "src/types";
import { Login } from "src/components";

export default function LoginPage(props: DefaultRouter) {
  useEffect(() => {
    document.title = "Sign In";
  }, []);
  return <Login />;
}
