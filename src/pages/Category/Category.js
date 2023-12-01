import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Flex from "../../components/atoms/Flex/Flex";
import { Text } from "../../components/atoms/Text";
import Category from "./Category";

function CreateNote({ categories, setCategories }) {
  // useEffect(() => {}, [categories]);
  const [text, setText] = useState("");
  const [done, setDone] = useState(0);
  useEffect(() => {
    if (done != 0) {
      localStorage.setItem("Category", JSON.stringify(categories));
    }
  }, [done]);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSave = () => {
    setCategories((prevState) => [...prevState, { id: text, value: text }]);
    setText("");
    setDone(done + 1);
  };
  return (
    <Box>
      <CatNameInput
        type="text"
        placeholder="Type...."
        value={text}
        onChange={handleText}
      ></CatNameInput>
      <Flex direction="row">
        <Btn onClick={handleSave}>
          <Text color="white">Save</Text>
        </Btn>
      </Flex>
    </Box>
  );
}

function Note({ id, categories, setCategories }) {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const filteredCat = categories.filter((cat) => cat.id !== id);
    setCategories(filteredCat);
    localStorage.setItem("Category", JSON.stringify(filteredCat));
  };
  const handleNavigation = () => {
    navigate(`/${id}/0`);
  };
  useEffect(() => {
    console.log(categories);
  }, []);
  return (
    <Box onClick={handleNavigation}>
      <Flex height="100%" justify="space-around">
        <Text size={20}>{id}</Text>
        <Btn
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}
        >
          <Text color="white">delete</Text>
        </Btn>
      </Flex>
    </Box>
  );
}

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const cat = JSON.parse(localStorage.getItem("Category"));
    if (cat) {
      setCategories(cat);
    }
  }, []);
  return (
    <AllContainer>
      <Flex width="80%" height="80vh" align="center" justify="center">
        <Wrapper>
          <Header>
            <Flex
              width="100%"
              height="100%"
              direction="row"
              align="center"
              justify="space-between"
            >
              <Text size={50}>Category Page</Text>
              {/* <NewButton>
                <Text size={20} color="white">
                  New Category
                </Text>
              </NewButton> */}
            </Flex>
          </Header>
          <CatContainer>
            <Flex
              direction="row"
              align="flex-start"
              justify="space-around"
              wrap="wrap"
              width="100%"
              gap={20}
            >
              {categories.map((cat) => (
                <Note
                  id={cat.id}
                  categories={categories}
                  setCategories={setCategories}
                />
              ))}
              <CreateNote
                categories={categories}
                setCategories={setCategories}
              />
            </Flex>
          </CatContainer>
        </Wrapper>
      </Flex>
    </AllContainer>
  );
}

export default CategoryPage;

const AllContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #ccc;
  padding: 10px 40px 10px 40px;
`;

const NewButton = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  opacity: 0.9;
  width: 25%;
  height: 60%;
  border-radius: 3px;
`;

const CatContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 40px 10px 40px;
`;

const CatBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: inset -6px -4px 2px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  border: 1.5px solid rgba(255, 255, 255, 0.326);
  color: #fff;
  paddding: 15px;
  display: flex;
  justify-content: space-between;
  word-wrap: break-word;
  width: 100%;
  height: 14vh;
`;

const Box = styled.div`
  width: 160px;
  height: 14vh;
  border: 1px solid grey;
  border-radius: 15px;
  border: 1.5px solid #ccc;
`;

const Btn = styled.div`
  background-color: #2196f3;
  border-radius: 10px;
  color: #ccc;
  font-size: 13px;
  cursor: pointer;
  width: 40%;
  height: 20%;
`;

const CatNameInput = styled.input`
  padding: 12px 20px;
  border-radius: 3px;
  border: 0.5px solid #ccc;
  margin: 8px 0;
  display: inline-block;
  height: 55%;
  width: 100%;
`;
