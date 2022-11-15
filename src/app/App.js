import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import MainPage from "./components/main";
import UsersListPage from "./components/usersListPage";
import UserPage from "./components/userPage";
import EditUserPage from "./components/editUserPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="users" element={<UsersListPage />}>
          <Route path=":userId" element={<UserPage />}>
            <Route path=":edit" element={<EditUserPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
