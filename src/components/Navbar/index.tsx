import React, { useCallback } from "react";
import {
  Flex,
  Image,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  Icon,
  Link,
  MenuList
} from "@chakra-ui/core";
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
  const { isAuthenticated } = useStoreState(state => state.authentication);
  const setIsAuthenticated = useStoreActions(
    actions => actions.authentication.setIsAuthenticated
  );

  return (
    <Box fontSize={["sm", "md", "lg", "xl"]}>
      <NavLink to="/">News</NavLink>
      {isAuthenticated ? (
        <Menu>
          <MenuButton>
            Pengaturan
            <Icon name="chevron-down" />
          </MenuButton>

          <MenuList>
            <MenuItem>
              <NavLink to="/settings/change-password">Ganti Password</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/login" onClick={() => setIsAuthenticated(false)}>
                Keluar
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <NavLink to="login">Sign In</NavLink>
      )}
    </Box>
  );
}
