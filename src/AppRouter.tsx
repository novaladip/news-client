import React, { lazy } from "react";
import { Router } from "@reach/router";

const LoginPage = lazy(() => import("src/pages/Login.page"));
const RegisterPage = lazy(() => import("src/pages/Register.page"));
const AddNewsPage = lazy(() => import("src/pages/AddNews.page"));
const EditNewsPage = lazy(() => import("src/pages/EditNews.page"));
const HomePage = lazy(() => import("src/pages/Home.page"));
const ShowNews = lazy(() => import("src/pages/ShowNews.page"));

export function AppRouter() {
  return (
    <Router>
      <LoginPage path="/login" />
      <RegisterPage path="/register" />
      <AddNewsPage path="/news/add" />
      <EditNewsPage path="news/{newsId}/edit" newsId="" />
      <HomePage path="/" />
      <ShowNews path="news/{newsId}" newsId="" />
    </Router>
  );
}
