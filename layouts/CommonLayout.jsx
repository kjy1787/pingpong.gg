import styled from "@emotion/styled";
import React from "react";
import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";

function CommonLayout(props) {
  return (
    <Container>
      <Head></Head>
      <Header></Header>
      <BodyContent>{props.children}</BodyContent>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  min-width: 320px;
  height: 100vh;
  background-color: var(--textBox);
`;
const BodyContent = styled.div`
  margin: 0px auto;
  width: 1080px;
  min-height: calc(100% - 108px);
`;
