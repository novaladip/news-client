import React from "react";
import { DefaultRouter } from "src/types";

interface Props extends DefaultRouter {
  newsId: string;
}

export default function ShowNewsPage(props: Props) {
  document.title = "PL NEWS";
  return (
    <div>
      <h1>Show News page</h1>
    </div>
  );
}
