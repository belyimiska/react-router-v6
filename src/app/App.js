import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import UsersList from "./components/usersList";
import MainPage from "./components/main";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/users/:userId?/:edit?" component={UsersList} />
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
