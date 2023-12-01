import styled from "styled-components";

function AppContainer({ children }) {
  return <StyledApp>{children}</StyledApp>;
}

const StyledApp = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  magin: 0 auto;
`;

export default AppContainer;
