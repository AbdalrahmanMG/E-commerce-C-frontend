import { Link, useNavigate, useParams } from "react-router-dom";
import useProductsQuery from "../components/hooks/useProductsQuery";
import { Box, Button, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import ProductDetailsSkeleton from "../components/ProductDetailsSkeleton";
import { BsArrowLeft } from "react-icons/bs";
import { IProduct } from "../Interfaces";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {colorMode} =useColorMode()
  

  const { data, isLoading } = useProductsQuery({
    queryKey: ['single-product'],
    url: `/products/${id}?populate=thumbnail`,
  });

  console.log(data);
  

  const goBack = () => navigate(-1);

  if (isLoading)
    return (
      <Box maxW={"sm"} mx={"auto"} mt={20}>
        <ProductDetailsSkeleton />
      </Box>
    );

  const {attributes}:IProduct = data.data;

  return (
    <>
      <Flex alignItems={"center"} maxW={"sm"} mx={"auto"} my={7} fontSize={"lg"} cursor={"pointer"} onClick={goBack}>
        <BsArrowLeft />
        <Text ml={2}>Back</Text>
      </Flex>
      <Card textAlign={'center'} maxW="sm" mx={"auto"} mb={20} border={"1px solid #a8b5c8"} bg={"none"}>
        <CardBody>
          <Image src={`${import.meta.env.VITE_SERVER_URL}${attributes.thumbnail.data.attributes.url}`} alt={attributes.title} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{attributes.title}</Heading>
            <Text> {attributes.description}</Text>
            <Text color="blue.600" fontSize="2xl">
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
          textTransform={'capitalize'}
        >
            Add to card
        </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProductDetails;
