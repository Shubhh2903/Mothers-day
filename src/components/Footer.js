/** @format */

import React from "react";
import facebook from "../assest/facebook.png";
import twitter from "../assest/twitter.png";
import instagram from "../assest/instagram.png";
import linkedin from "../assest/linkedin.png";
import styled from "styled-components/macro";
function Footer() {
  return (
    <Wrapper>
      <SocialMedia>
        <Facebook />
        <Instagram />
        <Twiiter />
        <LinkedIn />
      </SocialMedia>
      <Address>
        2261 Market Street #4667 San Francisco, CA 94114 <br />
        All rights reserved.  Shubham Lilawala
      </Address>
      <Foot>Preferences | Unsubscribe  | View in browser</Foot>
    </Wrapper>
  );
}

export default Footer;
const Foot = styled.div`
  font-family: Mont-Light;
  font-size: 14px;
  text-align: center;
`;
const Address = styled.div`
  font-family: Mont-Light;
  font-size: 14px;
  line-height: 1.7;
  padding: 15px 10px 30px 10px;
  text-align: center;
`;
const LinkedIn = styled.div`
  background-image: url(${linkedin});
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 40px;
`;
const Twiiter = styled.div`
  background-image: url(${twitter});
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 40px;
`;
const Instagram = styled.div`
  background-image: url(${instagram});
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 40px;
`;
const Facebook = styled.div`
  background-image: url(${facebook});
  background-repeat: no-repeat;
  background-size: contain;
  height: 40px;
  width: 40px;
`;
const SocialMedia = styled.div`
  display: flex;
  gap: 25px;
`;

const Wrapper = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;
