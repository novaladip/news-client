import React, { useCallback, useEffect } from "react";
import { useStoreActions } from "src/store";
import {
  getJwtFromLocalStorage,
  decodeJwt,
  isTokenExpired,
  removeJwtFromLocalStorage,
  setDefaultAuthJwt
} from "src/common";
import { navigate } from "@reach/router";

export function InitializingPage() {
  const setUser = useStoreActions(actions => actions.authentication.setUser);
  const setIsAuthenticated = useStoreActions(
    actions => actions.authentication.setIsAuthenticated
  );

  const checkToken = useCallback(() => {
    const jwt = getJwtFromLocalStorage();

    if (jwt) {
      const decoded = decodeJwt(jwt);
      const isTokenExpire = isTokenExpired(decoded.exp);
      if (isTokenExpire) {
        removeJwtFromLocalStorage();
        navigate("/login");
      } else {
        setDefaultAuthJwt(jwt);
        setIsAuthenticated(true);
        setUser(decoded);
      }
    }
  }, [setIsAuthenticated, setUser]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return <div />;
}
