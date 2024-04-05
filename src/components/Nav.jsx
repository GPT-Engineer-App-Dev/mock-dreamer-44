import { Box, Flex, Spacer, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex w="container.lg" mx="auto">
        <Link href="#about" fontWeight="bold">
          About
        </Link>
        <Spacer />
        <Link href="#education" fontWeight="bold">
          Education
        </Link>
        <Spacer />
        <Link href="#career" fontWeight="bold">
          Early Career
        </Link>
      </Flex>
    </Box>
  );
};

export default Nav;
