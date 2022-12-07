import styled from "@emotion/styled";
import Axios from "axios";
import React, { useEffect } from "react";
import CommonLayout from "@/layouts/CommonLayout";

function Players() {
  useEffect(() => {}, []);
  return <Wrapper></Wrapper>;
}

export default Players;

Players.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div``;
