import { Grid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axiosInstance from "../components/config/axios.config";
import { IProduct } from "../Interfaces";

const Products = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  //** handlers
  const getProducts = async () => {
    const { data } = await axiosInstance.get("/products?populate=thumbnail");
    setProductList(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
