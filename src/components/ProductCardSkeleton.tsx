import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Box padding="6" border={"1px solid #a8b5c8"} margin={4} bg={"none"} rounded={"md"} boxShadow="lg">
      <SkeletonCircle size="200px" m={'auto'} startColor='#a8b5c8'  />
      <SkeletonText mt="6" mb='5' textAlign={'center'} startColor='#a8b5c8' noOfLines={3} spacing="3" skeletonHeight="5" speed={0.8} />
      <SkeletonText mt="1" startColor='#a8b5c8' noOfLines={4} spacing="3" skeletonHeight="3" />
      <SkeletonText mt="24" mb={2} mx={'auto'} bottom={15} w={'100%'}startColor='#a8b5c8' noOfLines={1}  skeletonHeight="10" />
    </Box>
  );
};

export default ProductCardSkeleton;
