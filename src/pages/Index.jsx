import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Nav from "../components/Nav";

const Index = () => {
  return (
    <Box>
      <Nav />
      <VStack spacing={8} w="container.lg" mx="auto" mt={8}>
        <Box id="about">
          <Heading as="h2" size="2xl" mb={4}>
            About
          </Heading>
          <Text>Alexander Hamilton was born in either 1755 or 1757 on the island of Nevis in the Caribbean. He was raised by his mother after his father abandoned the family. Tragically, Hamilton became an orphan at age 13 when his mother died. He was taken in by a merchant family and worked as a clerk. His bosses were impressed by his exceptional writing skills from a young age.</Text>
        </Box>

        <Box id="education">
          <Heading as="h2" size="2xl" mb={4}>
            Education
          </Heading>
          <Text>As a teenager, Hamilton's prolific writing abilities impressed his employers who collected funds to send him to the North American colonies for education. He arrived in New York in 1772 and began studies at King's College (now Columbia University). His college education was cut short by the American Revolution, but Hamilton made the most of this brief opportunity, accelerating his course load to graduate early.</Text>
        </Box>

        <Box id="career">
          <Heading as="h2" size="2xl" mb={4}>
            Early Career
          </Heading>
          <Text>In the early 1770s, while still a teenager, Hamilton wrote several influential pamphlets supporting the American cause. When war broke out, he served as an artillery officer under George Washington from 1776 to 1781. During this time, he became one of Washington's most trusted aides and advisors.</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
