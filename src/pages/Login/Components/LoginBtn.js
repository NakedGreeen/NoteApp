import styled from "styled-components";
import Flex from "../../../components/atoms/Flex/Flex";
import { Text } from "../../../components/atoms/Text";

function LoginBtn() {
  const onLogin = () => {
    var loginData = localStorage.getItem(process.env.MEMOAPP_LOGIN_KEY);
  };
  return <LoginButton>로그인</LoginButton>;
}

export default LoginBtn;

const LoginButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  width: 25%;
  heigth: 18%;
  border-radius: 3px;
`;
