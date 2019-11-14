import React, { useCallback } from "react";
import { Flex, Image, Text, Box, Link } from "@chakra-ui/core";
import { navigate } from "@reach/router";

import { useStoreState, useStoreActions } from "src/store";

export function Navbar() {
  return (
    <Flex
      bg="white"
      color="black"
      w="100%"
      px={5}
      py={4}
      justify="space-between"
      alignItems="center"
      borderBottomWidth="3px"
    >
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
          size={30}
          alt="brand logo"
        />
        <Text pl={3} fontSize={["sm", "md", "lg", "xl"]}>
          PL NEWS
        </Text>
      </Flex>
      <NavItem />
    </Flex>
  );
}

function NavLink({
  children,
  onClick = () => {},
  to
}: {
  children: any;
  to: string;
  onClick?: any;
}) {
  const handleOnClick = useCallback(() => {
    onClick();

    navigate(to);
  }, [onClick, to]);

  return (
    <Link px={2} onClick={handleOnClick}>
      {children}
    </Link>
  );
}

export function NavItem() {
  const { isAuthenticated, user } = useStoreState(
    state => state.authentication
  );
  const setIsAuthenticated = useStoreActions(
    actions => actions.authentication.setIsAuthenticated
  );

  return (
    <Box fontSize={["sm", "md", "lg", "xl"]}>
      <NavLink to="/">News</NavLink>

      {isAuthenticated ? (
        <>
          {user.isAdmin === 1 && <NavLink to="/add/news">Add News</NavLink>}
          <NavLink to="/login" onClick={() => setIsAuthenticated(false)}>
            Sign Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Sign In</NavLink>
          <NavLink to="/register">Sign Up</NavLink>
        </>
      )}
    </Box>
  );
}
