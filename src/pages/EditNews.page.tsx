import React from "react";
import { DefaultRouter } from "src/types";

interface Props extends DefaultRouter {
  newsId: string;
}

export default function AddNewsPage(props: Props) {
  return (
    <div>
      <h1>Edit News page</h1>
    </div>
  );
}
