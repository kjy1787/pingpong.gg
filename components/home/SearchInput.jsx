import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Axios from "@/api/index";
import useClickOutside from "@/hooks/useClickOutside";
import useDebounce from "@/hooks/useDebounce";

function SearchInput(props) {
  const router = useRouter();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [userList, setUserList] = useState([]);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  const getUserList = useDebounce((name) => {
    if (name) {
      Axios.get("/api/user", { params: { name: name } }).then((res) => {
        setUserList(res.data);
      });
    }
  }, 100);

  return (
    <Wrapper ref={ref} width={props.width}>
      <InputContainer>
        <Title>Search</Title>
        <Input
          type="text"
          placeholder="소환사명"
          onChange={(e) => {
            const { value } = e.target;
            getUserList(value);
          }}
          onFocus={() => setIsOpen(true)}
        ></Input>
      </InputContainer>
      <GG>.GG</GG>
      {isOpen && userList.length > 0 && (
        <ListContainer>
          {userList.map((user, key) => (
            <ListBox
              key={key}
              onClick={() => {
                router.push(`/players/${user.id}`);
              }}
            >
              <ImageBox>
                <Image
                  src={user.imgUrl}
                  width={36}
                  height={36}
                  alt="profileImg"
                ></Image>
              </ImageBox>
              <TextBox>
                <Text>{user.name}</Text>
                <SubText>{user.tier}</SubText>
              </TextBox>
            </ListBox>
          ))}
        </ListContainer>
      )}
    </Wrapper>
  );
}

export default SearchInput;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 800px;
  height: 60px;
  padding: 0px 32px;
  border-radius: 30px;
  background-color: var(--textBox);
  & * {
    background-color: var(--textBox);
  }
`;
const InputContainer = styled.div`
  width: 100%;
  margin: 0px 8px;
`;
const Input = styled.input`
  font: var(--body14);
  width: 100%;
  caret-color: var(--brandColor);
`;
const Title = styled.p`
  font: var(--body16);
`;
const GG = styled.div`
  color: var(--brandColor);
  font-size: 24px;
  font-weight: 900;
`;
const ListContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 32px;
  width: 680px;
  background-color: var(--textBox);
`;
const ListBox = styled.div`
  display: flex;
  height: 50px;
  padding: 6px 16px;
  cursor: pointer;
  &:hover {
    background-color: var(--icon1);
  }
  & * {
    background-color: inherit;
  }
`;
const ImageBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 16px;
  overflow: hidden;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Text = styled.p`
  font: var(--body14);
`;
const SubText = styled.p`
  font: var(--caption12);
  color: var(--sub);
`;
