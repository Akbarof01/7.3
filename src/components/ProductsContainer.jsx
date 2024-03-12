import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const getLayoutFromLocalStorage = () => {
  return localStorage.getItem("layout");
};
const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, ] = useState(getLayoutFromLocalStorage() || "grid");

  useEffect(() => {
    return localStorage.setItem("layout", layout);
  }, [layout]);

  const setActiveStyles = (pattern) => {
    return `btn btn-circle btn-sm text-xl ${
      pattern === layout ? "btn-primary" : "btn-ghost"
    }`;
  };

  return (
    <>
      <div className="mt-8 flex items-center justify-between border-b border-base-300 pb-5">
        <h4 className="text-base font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
      </div>
      <div>
        {totalProducts < 1 ? (
          <h5 className="mt-16 text-center text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
