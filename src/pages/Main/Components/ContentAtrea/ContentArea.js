import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Flex from "../../../../components/atoms/Flex/Flex";

function ContentArea({}) {
  const params = useParams();
  const navigate = useNavigate();
  const [noteData, setNoteData] = useState([]);
  const [done, setDone] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [text, setText] = useState({ title: "", content: "" });
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(`${params.Category}`));
    if (data) {
      setNoteData(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(`${params.Category}`, JSON.stringify(noteData));
  }, [noteData]);
  const handleInput = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setNoteData((prevState) => [...prevState, text]);
    setText({ title: "", content: "" });
    setSubmit(true);
  };
  useEffect(() => {
    if (text.title === "" && text.content === "" && submit == true) {
      setSubmit(false);
      navigate(`/${params.Category}/0`);
    }
  }, [text, submit]);

  return (
    <Wrapper>
      <Header>
        <Flex
          direction="row"
          height="100%"
          align="center"
          justify="space-around"
        >
          <TitleInput
            type="text"
            name="title"
            placeholder="제목을 작성해주세요."
            value={text.title}
            onChange={handleInput}
          />
          <WriteButton onClick={() => handleSubmit()}>
            <Flex height="100%" width="100%" align="center" justify="center">
              작성 완료
            </Flex>
          </WriteButton>
        </Flex>
      </Header>
      <Flex height="80%">
        <ContentInput
          type="textarea"
          name="content"
          placeholder="내용을 작성해주세요."
          value={text.content}
          onChange={handleInput}
        />
      </Flex>
    </Wrapper>
  );
}

export default ContentArea;

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

const TitleInput = styled.input`
  width: 60%;
  padding: 12px 20px;
  border-radius: 3px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
`;

const ContentInput = styled.textarea`
  width: 92%;
  height: 85%;
  padding: 12px 20px;
  border-radius: 3px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
`;

const WriteButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  width: 25%;
  height: 18%;
  border-radius: 3px;
`;
