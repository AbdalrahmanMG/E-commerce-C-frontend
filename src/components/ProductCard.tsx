import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IProduct } from "../Interfaces";

interface IProps {
  product: IProduct
}

const ProductCard = ({product:{attributes,id}}: IProps) => {
  const { colorMode } = useColorMode();
  
  return (
    <Card border={"1px solid #a8b5c8"} margin={4} bg={"none"}>
      <CardBody>
        <Image
          src={`${import.meta.env.VITE_SERVER_URL}${attributes.thumbnail.data.attributes.url}`} alt={attributes.title}
          borderRadius="full"
          boxSize={"200px"}
          mx={"auto"}
          objectFit={"cover"}
        />
        <Stack mt="6" spacing="3" textAlign={"center"}>
          <Heading size="md">{attributes.title}</Heading>
          <Text fontSize={"sm"}>{attributes.description}
          </Text>
          <Text color="blue.600" fontSize="3xl">
            ${attributes.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          as={Link}
          to={`/products/${id}`}
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
