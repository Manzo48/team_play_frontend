import { Route, Routes } from "react-router";
import Header from "./components/Comments/Header";
import HomePage from "./pages/HomePage/HomePage";
import CreateUser from "./components/authorization/createUser";
import Login from "./components/authorization/login";
import LogRoom from "./components/authorization/logRoom";

import style from "./css/app.module.css";
import FullPost from "./pages/HomePage/FullPostPage";
import AddPost from "./components/AddPosts/AddPost";
function App() {
  return (
    <div className={style.app}>
      <Header />

      <Routes>
        <Route path="/logRoom" element={<LogRoom />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/fullpost/:postId" element={<FullPost />} />
        <Route path="addPost" element={<AddPost />} />
      </Routes>
    </div>
  );
}

export default App;
