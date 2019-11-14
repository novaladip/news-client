import React, { useEffect } from "react";
import { DefaultRouter } from "src/types";
import { News } from "src/components";

export default function HomePage(props: DefaultRouter) {
  useEffect(() => {
    document.title = "PL NEWS";
  }, []);
  return <News />;
}
