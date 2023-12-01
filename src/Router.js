import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import ContentArea from "./pages/Main/Components/ContentAtrea/ContentArea";
import CategoryPage from "./pages/Category/Category";
import Login from "./pages/Login/Login";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/:Category/:id" element={<Main />} />
        <Route path="/:Category/new" element={<ContentArea />} />

        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
