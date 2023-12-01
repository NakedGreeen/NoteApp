import "./App.css";
import GlobalStyle from "./pages/styles/GlobalStyle";
import Router from "./Router";
import AppContainer from "./components/AppContainer";
function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Router />
      </AppContainer>
    </>
  );
}

export default App;
