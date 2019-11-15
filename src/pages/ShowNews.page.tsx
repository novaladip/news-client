import React from "react";
import { DefaultRouter } from "src/types";
import { ShowNews } from "src/components";

interface Props extends DefaultRouter {
  newsId: string;
}

export default function ShowNewsPage(props: Props) {
  document.title = "PL NEWS";
  return <ShowNews newsId={props.newsId} />;
}
