import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Flex from "../../../../components/atoms/Flex/Flex";
import { Text } from "../../../../components/atoms/Text";

function ListArea({ noteData }) {
  const params = useParams();
  //   const [page, setPage] = useState(0);
  var page = 2;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/${params.Category}/new`);
  };
  const handleBla = (id) => {
    navigate(`/${params.Category}/${id}`);
  };
  const toCategory = () => {
    navigate(`/`);
  };
  const [text, setText] = useState({ title: "", content: "" });
  return (
    <Wrapper>
      <Header>
        <Flex
          direction="row"
          height="100%"
          align="center"
          justify="space-around"
        >
          <NewButton onClick={toCategory}>Category Page</NewButton>
          <NewButton onClick={handleNavigation}>New Note</NewButton>
        </Flex>
      </Header>
      <Flex height="100%" justify="flex-start">
        {noteData.map((note, index) => {
          return (
            <TitleBox onClick={() => handleBla(index)}>
              <Text size={15}>{note.title}</Text>
            </TitleBox>
          );
        })}
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 25%;
  height: 100vh;
  border-right: 1px solid #ccc;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #ccc;
  padding: 10px 5px 10px 5px;
`;

const NewButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  width: 40%;
  heigth: 18%;
  border-radius: 3px;
`;

const TitleBox = styled.div`
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

export default ListArea;
