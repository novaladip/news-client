import React, { useEffect } from "react";
import { DefaultRouter } from "src/types";
import { AddNews } from "src/components";

export default function AddNewsPage(props: DefaultRouter) {
  useEffect(() => {
    document.title = "Add News";
  }, []);

  return <AddNews />;
}
