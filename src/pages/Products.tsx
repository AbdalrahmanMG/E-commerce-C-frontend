import { Grid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../Interfaces";
import useProductsQuery from "../components/hooks/useProductsQuery";

const Products = () => {

  const { data, isLoading } = useProductsQuery({
    queryKey: ["products"],
    url: "/products?populate=thumbnail",
  });

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {data.data.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default Products;
