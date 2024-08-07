import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IProps {}

const ProductCard = ({}: IProps) => {
  const { colorMode } = useColorMode();
  console.log(colorMode);

  return (
    <Card maxW="sm" border={"1px solid #a8b5c8"} margin={10} bg={"none"}>
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="full"
          boxSize={"200px"}
          mx={"auto"}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3" textAlign={"center"}>
          <Heading size="md">Living room Sofa</Heading>
          <Text fontSize={"sm"}>
            This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="3xl">
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          as={Link}
          to={`/products/1`}
          bg={colorMode === "light" ? "#e6f3fd" : "#9f7aea"}
          color={colorMode !== "light" ? "#e6f3fd" : "#9f7aea"}
          _hover={{
            bg: colorMode !== "light" ? "#e6f3fd" : "#9f7aea",
            color: colorMode === "light" ? "white" : "#9f7aea",
          }}
          w={"full"}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;