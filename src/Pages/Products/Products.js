import React from "react";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
export default function Products() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <AddNewProduct />
        <ProductsSection/>
      </div>
    </>
  );
}
