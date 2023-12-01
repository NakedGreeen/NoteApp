import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Text } from "../../components/atoms/Text";
import Flex from "../../components/atoms/Flex/Flex";

import LoginBtn from "./Components/LoginBtn";
function Login() {
  const [loginData, setLoginData] = useState({ id: "", pw: "" });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Flex height="100vh">
      <LoginContainer>
        <Input
          name="id"
          type="text"
          placeholder="id를 입력해주세요."
          value={loginData.id}
          onChange={handleChange}
        />
        <Input
          name="pw"
          type="text"
          placeholder="비밀번호를 입력해주세요."
          value={loginData.pw}
          onChange={handleChange}
        />
        <LoginBtn />
      </LoginContainer>
    </Flex>
  );
}

export default Login;

const LoginContainer = styled.div`
  width: 40vw;
  height: 30vw;
  border: 1px solid black;
`;

const Input = styled.input`
  width: 80%;
  padding: 12px 20px;
  border-radius: 3px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
`;
