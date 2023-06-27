import { Link, useLocation } from "react-router-dom";
import { forwardRef } from "react";
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';
import { IoLogoGithub } from 'react-icons/io5';
import Logo from './logo';

const LinkItem = ({ to, children, ...props }) => {
  const location = useLocation();
  const active = location.pathname === to;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link
      to={to}
      component={MenuLink}
      p={2}
      bg={active ? "grassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  );
};

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} {...props} />
));


const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
            {/* <Text>Ahmed Guetti</Text> */}
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem to="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem to="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem to="/gallery" path={path}>
            Gallery
          </LinkItem>
          {/* <LinkItem to="https://uses.craftz.dog/">Uses</LinkItem> */}
          {/* <LinkItem
            target="_blank"
            to="https://github.com/AhmedGuetti"
            path={path}
            display="inline-flex"
            align="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/posts">
                  Posts
                </MenuItem>
                <MenuItem as={MenuLink} href="https://uses.craftz.dog/">
                  Uses
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/craftzdog/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
