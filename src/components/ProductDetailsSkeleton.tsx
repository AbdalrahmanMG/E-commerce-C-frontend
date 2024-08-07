import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductDetailsSkeleton = () => {
  return (
    <Box padding="6" border={"1px solid #a8b5c8"} margin={4} bg={"none"} rounded={"md"} boxShadow="lg">
      <Skeleton height={"200px"} />
      <SkeletonText mt="4" startColor="#a8b5c8" noOfLines={1} spacing="4" mx={'auto'} skeletonHeight="3" />
      <SkeletonText mt="4" startColor="#a8b5c8" noOfLines={3} spacing="4"/>
      <SkeletonText mt="4" startColor="#a8b5c8" noOfLines={1} spacing="4" maxW={'150px'}/>
      
      <Skeleton mt="12" mb={2} mx={"auto"} w={"100%"} startColor="#a8b5c8" height={'50px'} />
    </Box>
  );
};

export default ProductDetailsSkeleton;
