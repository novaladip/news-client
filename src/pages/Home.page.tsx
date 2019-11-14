import React, { useEffect } from "react";
import { DefaultRouter } from "src/types";

export default function HomePage(props: DefaultRouter) {
  useEffect(() => {
    document.title = "PL NEWS";
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
