import React, { useEffect } from "react";
import { DefaultRouter } from "src/types";
import { EditNews } from "src/components";

interface Props extends DefaultRouter {
  newsId: string;
}

export default function AddNewsPage(props: Props) {
  useEffect(() => {
    document.title = "Edit News";
  }, []);
  return <EditNews newsId={props.newsId} />;
}
