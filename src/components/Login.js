import React from "react";
import styled from "styled-components";
import image from "../images/login-background.jpg";
import logo from "../images/cta-logo-one.svg";
import ctatwo from "../images/cta-logo-two.png";

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src={logo} alt="No image right now" />
          <SignUp className="btn btn-primary">GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTAtwo src={ctatwo} />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section` 
    overflow: hidden;
    height: 100vh;
    display: flex;
    text-align: center
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

const Content = styled.div`
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  height: 100%;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url(${image});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  dispaly: flex;
  flex-direction: column;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
`;

const CTAtwo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px; 
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 25px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden
  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
`;

export default Login;
