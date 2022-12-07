import { themeState } from "@/recoil/atom";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

function SearchInput(props) {
  const [theme, setTheme] = useRecoilState(themeState);
  const [value, setValue] = useState("");

  return (
    <Wrapper width={props.width}>
      <InputContainer>
        <Text>Search</Text>
        <Input
          type={props.type}
          name={props.name}
          placeholder="소환사명"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange(e);
          }}
        ></Input>
      </InputContainer>
      <GG>.GG</GG>
    </Wrapper>
  );
}

export default SearchInput;

SearchInput.defaultProps = {
  label: "LABEL",
  type: "text",
  value: "",
  placeholder: "placeholder",
  onChange: () => {},
};

const Wrapper = styled.div`
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
const Icon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.p`
  font: var(--body16);
`;
const GG = styled.div`
  color: var(--brandColor);
  font-size: 24px;
  font-weight: 900;
`;
