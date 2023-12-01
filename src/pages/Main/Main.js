import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Flex from "../../components/atoms/Flex/Flex";
import { Text } from "../../components/atoms/Text";

import ListArea from "./Components/ListArea/ListArea";
import ContentArea from "./Components/ContentAtrea/ContentArea";

function Contents({ noteData, isData }) {
  const params = useParams();
  return (
    <Wrapper>
      <Header>
        <Flex height="100%" direction="row" justify="flex-start" align="center">
          <Text size={18} weight={800}>
            {isData == 3 && noteData.length != 0 ? (
              <>{noteData[params.id].title}</>
            ) : (
              <></>
            )}
          </Text>
        </Flex>
      </Header>
      <Body>
        <Flex height="100%" direction="row" justify="flex-start" align="center">
          <Text size={18} weight={400}>
            {isData == 3 && noteData.length != 0 ? (
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
