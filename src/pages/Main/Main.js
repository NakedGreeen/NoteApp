import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Flex from "../../components/atoms/Flex/Flex";
import { Text } from "../../components/atoms/Text";

import ListArea from "./Components/ListArea/ListArea";
import ContentArea from "./Components/ContentAtrea/ContentArea";

function Contents({ noteData, isData }) {
  const navigate = useNavigate();
  const params = useParams();
  const [isDelete, setIsDelete] = useState(false);

  const handleDelete = () => {
    noteData.splice(params.id, 1);
    localStorage.setItem(`${params.Category}`, JSON.stringify(noteData));
    setIsDelete(true);
  };

  useEffect(() => {
    if (isDelete == true) {
      setIsDelete(false);
      navigate(`/${params.Category}/0`);
    }
  }, [noteData, isDelete]);
  return (
    <Wrapper>
      <Header>
        <Flex
          height="100%"
          direction="row"
          justify="space-between"
          align="center"
        >
          <Text size={18} weight={800}>
            {isData > 0 && noteData.length != 0 ? (
              <>{noteData[params.id].title}</>
            ) : (
              <></>
            )}
          </Text>
          <WriteButton onClick={handleDelete}>Delete</WriteButton>
        </Flex>
      </Header>
      <Body>
        <Flex height="100%" direction="row" justify="flex-start" align="center">
          <Text size={18} weight={400}>
            {isData > 0 && noteData.length != 0 ? (
              <>{noteData[params.id].content}</>
            ) : (
              <></>
            )}
          </Text>
        </Flex>
      </Body>
    </Wrapper>
  );
}
function Main() {
  const params = useParams();
  const navigate = useNavigate();
  const [noteData, setNoteData] = useState([]);
  const [isData, setIsData] = useState(0);
  const fetchData = async () => {
    const data = JSON.parse(localStorage.getItem(`${params.Category}`));
    if (data) {
      setNoteData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.Category]);

  useEffect(() => {
    if (isData == 0) {
      fetchData();
      setIsData(1);
    } else if (isData == 1) {
      fetchData();
      setIsData(2);
    } else if (isData == 2) {
      fetchData();
      setIsData(3);
    }
  }, [noteData]);

  return (
    <AllContainer>
      <Flex direction="row">
        <ListArea noteData={noteData} />
        <Contents noteData={noteData} isData={isData} />
      </Flex>
    </AllContainer>
  );
}

export default Main;

const AllContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #ccc;
  padding: 10px 5px 10px 5px;
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 5px 10px 5px;
`;

const WriteButton = styled.button`
  background-color: #d11a2a;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  width: 15%;
  border-radius: 3px;
`;
