/** @format */
import React from "react";
import logo from "../assest/logo.png";
import styled from "styled-components/macro";
function Navbar() {
  return (
    <>
      <Wrapper>
        <Nav>
          <Logo />
          <Navigation>
            <Text>Home</Text>
            <Text>Sale</Text>
            <Text>Store</Text>
            <Text>Contact Us</Text>
          </Navigation>
        </Nav>

        <Container>
          <Title>
            Mother's <span style={{ fontWeight: "Bold" }}>Day</span>
          </Title>
          <SubTitle>Upto 40% Off</SubTitle>
          <Shop>Shop Now</Shop>
        </Container>
      </Wrapper>
    </>
  );
}

export default Navbar;
const Shop = styled.button`
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  background-color: #4d9482;
  padding: 10px;
  color: #fff;
  font-family: Mont-Bold;
`;
const SubTitle = styled.div`
  font-family: Mont-Light;
  font-size: 24px;
  text-align: center;
  padding-top: 30px;
`;
const Title = styled.div`
  font-family: Mont-Medium;
  font-size: 44px;
  text-align: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  justify-content: center;
  align-items: center;
`;
const Text = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const Navigation = styled.div`
  font-family: Mont-Light;
  display: flex;
  padding-top: 40px;
  gap: 50px;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
  }
`;
const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 150px;
  width: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d6e6ea;
  flex-direction: column;
  padding-bottom: 100px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 15px;
  }
`;
