import React from "react";
import { Box, Button, Container, Flex, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaRocket, FaLightbulb, FaHeart } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" padding="4" bg="blue.500" color="white" justifyContent="space-between" alignItems="center">
        <Heading size="lg">ReactSite</Heading>
        <Button colorScheme="blue" variant="outline">
          Sign In
        </Button>
      </Flex>

      {/* Hero Section */}
      <Container maxW="container.lg" paddingTop="10" centerContent>
        <VStack spacing="6">
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to ReactSite
          </Heading>
          <Text fontSize="xl" textAlign="center">
            The place to learn and explore React components with Chakra UI.
          </Text>
          <Button leftIcon={<FaRocket />} colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>

      {/* Features Section */}
      <Box py="20" bg="gray.100">
        <VStack spacing="8">
          <Heading as="h2" size="xl" textAlign="center">
            Awesome Features
          </Heading>
          <Stack direction={["column", "row"]} spacing="24" justify="center">
            <FeatureCard icon={FaLightbulb} title="Innovative Ideas" description="Discover cutting-edge React patterns." />
            <FeatureCard icon={FaRocket} title="Quick Start" description="Deploy your React apps faster than ever." />
            <FeatureCard icon={FaHeart} title="Community Love" description="Join a growing community of developers." />
          </Stack>
        </VStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" py="4" bg="blue.600" color="white" justifyContent="center">
        <Text>&copy; {new Date().getFullYear()} ReactSite</Text>
      </Flex>
    </Box>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <VStack spacing="4" bg="white" p="6" borderRadius="md" boxShadow="md">
      <Icon as={icon} w="16" h="16" color="blue.500" />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
