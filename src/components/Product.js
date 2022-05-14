/** @format */

import React from "react";
import prod from "../assest/product.png";
import prod2 from "../assest/product-2.png";
import prod3 from "../assest/product-3.png";
import prod4 from "../assest/product-4.png";
import styled from "styled-components/macro";
function Product() {
  return (
    <Container>
      <Items>
        <ProductInfoLeft>
          <ProductTitle>
            Brighten up dull,
            <br /> dreary winter skin.
          </ProductTitle>
          <Details>
            Lorem ipsum dolor sit amet, consect
            <br /> etuer adipiscing elit, sed diam
            <br />
            nonummy nibh euismod tincidunt
            <br /> ut laoreet dolore magna aliquam
            <br /> erat volutpat.
          </Details>
          <Shop>Shop Now</Shop>
        </ProductInfoLeft>
        <ProductImage></ProductImage>
      </Items>
      <Items>
        <ProductImage2></ProductImage2>
        <ProductInfoRight>
          <ProductTitle style={{ textAlign: "right" }}>
            Brighten up dull,
            <br /> dreary winter skin.
          </ProductTitle>
          <Details>
            Lorem ipsum dolor sit amet, consect
            <br /> etuer adipiscing elit, sed diam
            <br />
            nonummy nibh euismod tincidunt
            <br /> ut laoreet dolore magna aliquam
            <br /> erat volutpat.
          </Details>
          <Shop>Shop Now</Shop>
        </ProductInfoRight>
      </Items>
      <Items>
        <ProductInfoLeft>
          <ProductTitle>
            Brighten up dull,
            <br /> dreary winter skin.
          </ProductTitle>
          <Details>
            Lorem ipsum dolor sit amet, consect
            <br /> etuer adipiscing elit, sed diam
            <br />
            nonummy nibh euismod tincidunt
            <br /> ut laoreet dolore magna aliquam
            <br /> erat volutpat.
          </Details>
          <Shop>Shop Now</Shop>
        </ProductInfoLeft>
        <ProductImage3></ProductImage3>
      </Items>
      <Items>
        <ProductImage4></ProductImage4>
        <ProductInfoRight>
          <ProductTitle style={{ textAlign: "right" }}>
            Brighten up dull,
            <br /> dreary winter skin.
          </ProductTitle>
          <Details>
            Lorem ipsum dolor sit amet, consect
            <br /> etuer adipiscing elit, sed diam
            <br />
            nonummy nibh euismod tincidunt
            <br /> ut laoreet dolore magna aliquam
            <br /> erat volutpat.
          </Details>
          <Shop>Shop Now</Shop>
        </ProductInfoRight>
      </Items>
    </Container>
  );
}

export default Product;
const ProductInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;
  text-align: right;
`;
const ProductImage3 = styled.div`
  background-image: url(${prod3});
  background-size: contain;
  align-items: flex-end;
  height: 500px;
  width: 500px;
  background-position: center;
  background-repeat: no-repeat;
`;
const ProductImage4 = styled.div`
  background-image: url(${prod4});
  background-size: contain;
  align-items: flex-end;
  height: 500px;
  width: 500px;
  background-repeat: no-repeat;
  background-position: center;
`;
const ProductImage2 = styled.div`
  background-image: url(${prod2});
  background-size: contain;
  align-items: flex-end;
  height: 500px;
  width: 500px;
  background-repeat: no-repeat;
`;
const ProductImage = styled.div`
  background-image: url(${prod});
  background-size: contain;
  align-items: flex-end;
  height: 500px;
  width: 500px;
  background-repeat: no-repeat;
`;
const Shop = styled.button`
  margin-top: 30px;
  margin-left: 25px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 150px;
  font-size: 14px;
  background-color: #4d9482;
  padding: 10px;
  color: #fff;
  font-family: Mont-Bold;
`;
const Details = styled.div`
  font-family: Mont-Light;
  font-size: 14px;
  padding: 10px 10px 10px 30px;
`;
const ProductTitle = styled.div`
  font-family: Mont-Bold;
  font-size: 28px;
  color: #4d9482;
  line-height: 1.4;
  text-align: left;
  padding: 20px 10px 0 30px;
`;
const ProductInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 100px;
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dceceb;
`;