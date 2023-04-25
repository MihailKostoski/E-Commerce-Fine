import React from "react";
import { useParams } from "react-router-dom";
function Collections() {
  const { filter } = useParams();
  let filterModified = filter.toString();
  console.log(filter);
  return (
    <div>
      {filterModified === "women" ? (
        <span>Women</span>
      ) : filterModified === "tops-tees" ? (
        <span>tops & tees</span>
      ) : filterModified === "activewear" ? (
        <span>Activewear</span>
      ) : filterModified === "dresses-skirts" ? (
        <span>Dresses & Skirts</span>
      ) : filterModified === "hoodies-sweaters" ? (
        <span>Hoodies & Sweaters</span>
      ) : filterModified === "men" ? (
        <span>Men</span>
      ) : filterModified === "men-jackets" ? (
        <span>Men Jackets</span>
      ) : filterModified === "men-hoodies-sweaters" ? (
        <span>Men Hoodies & Sweaters</span>
      ) : filterModified === "men-joggers-sweatpants" ? (
        <span>Men Joggers & Sweatpants</span>
      ) : filterModified === "men-pants" ? (
        <span>Men Pants</span>
      ) : filterModified === "men-tops-tees" ? (
        <span>Men Tops & Tees</span>
      ) : filterModified === "accessories" ? (
        <span>Accessories</span>
      ) : filterModified === "accessories-jewelry" ? (
        <span>Accessories Jewelry</span>
      ) : filterModified === "accessories-scarves" ? (
        <span>Accessories Scarves</span>
      ) : filterModified === "accessories-sunglasses" ? (
        <span>Accessories Sunglasses</span>
      ) : filterModified === "accessories-hats-belts" ? (
        <span>Accessories Hats & Belts</span>
      ) : filterModified === "accessories-bags" ? (
        <span>Accessories Bags</span>
      ) : filterModified === "brands" ? (
        <span>Brands</span>
      ) : filterModified === "brands-tommy-hilfiger" ? (
        <span>Brands Tommy Hilfiger</span>
      ) : filterModified === "brands-emporio-armani" ? (
        <span>Brands Emporio Armani</span>
      ) : filterModified === "brands-calvin-klein" ? (
        <span>Brands Calvin Klein</span>
      ) : filterModified === "brands-guess" ? (
        <span>Brands Guess</span>
      ) : filterModified === "brands-michael-kors" ? (
        <span>Brands Michael Kors</span>
      ) : filterModified === "brands-hugo-boss" ? (
        <span>Brands Hugo Boss</span>
      ) : filterModified === "shop" ? (
        <span>Collectionss all</span>
      ) : filterModified === "" ? (
        <span>Collections</span>
      ) : null}
    </div>
  );
}

export default Collections;
