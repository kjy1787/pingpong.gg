import styled from "@emotion/styled";
import Axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Profile from "@/components/players/Profile";
import CommonLayout from "@/layouts/CommonLayout";

//jiseok2301
//kjy1787

function Players() {
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    console.log(router.query);
    setId(router.query.id);
  }, [router]);

  return (
    <Wrapper>
      <Profile id={id}></Profile>
    </Wrapper>
  );
}

export default Players;

Players.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div``;
