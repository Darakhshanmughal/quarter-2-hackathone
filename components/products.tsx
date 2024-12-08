import type { NextPage } from "next";
import ProductItems from "./product-items";
import GroupComponent from "./group-component";
import styles from "./products.module.css";

export type ProductsType = {
  className?: string;
};

const Products: NextPage<ProductsType> = ({ className = "" }) => {
  return (
    <div className={[styles.products, className].join(" ")}>
      <ProductItems
        productImage="/rectangle-32@2x.png"
        accumsanTincidunt="Accumsan tincidunt"
        group35="/group-35.svg"
      />
      <ProductItems
        productImage="/rectangle-32-1@2x.png"
        productTitleWrapHeight="unset"
        productBrandJustifyContent="space-between"
        productBrandGap="20px"
        productBrandFlex="unset"
        accumsanTincidunt="In nulla"
        accumsanTinciduntFlex="unset"
        accumsanTinciduntDisplay="inline-block"
        accumsanTinciduntMinWidth="73px"
        group35="/group-35.svg"
      />
      <ProductItems
        productImage="/rectangle-32-2@2x.png"
        productTitleWrapHeight="unset"
        productBrandJustifyContent="space-between"
        productBrandGap="20px"
        productBrandFlex="unset"
        accumsanTincidunt="Vel sem"
        accumsanTinciduntFlex="unset"
        accumsanTinciduntDisplay="inline-block"
        accumsanTinciduntMinWidth="74px"
        group35="/group-35.svg"
      />
      <GroupComponent
        rectangle32="/rectangle-32-3@2x.png"
        porttitorCum="Porttitor cum"
        group35="/group-35.svg"
      />
      <GroupComponent
        rectangle32="/rectangle-32-4@2x.png"
        porttitorCum="Nunc in"
        porttitorCumMinWidth="75px"
        group35="/group-35.svg"
      />
      <ProductItems
        productImage="/rectangle-32-5@2x.png"
        productTitleWrapHeight="unset"
        productBrandJustifyContent="space-between"
        productBrandGap="20px"
        productBrandFlex="unset"
        accumsanTincidunt="Vitae facilisis"
        accumsanTinciduntFlex="unset"
        accumsanTinciduntDisplay="inline-block"
        accumsanTinciduntMinWidth="129px"
        group35="/group-35.svg"
      />
      <ProductItems
        productImage="/rectangle-32-6@2x.png"
        productTitleWrapHeight="49.7px"
        productBrandJustifyContent="flex-start"
        productBrandGap="50.2px"
        productBrandFlex="1"
        accumsanTincidunt="Curabitur lectus"
        accumsanTinciduntFlex="1"
        accumsanTinciduntDisplay="unset"
        accumsanTinciduntMinWidth="unset"
        group35="/group-35.svg"
      />
    </div>
  );
};

export default Products;
