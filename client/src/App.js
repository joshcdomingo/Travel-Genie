import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import AuthContext from "./contexts/AuthContext";
import { refresh } from "./services/auth"

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    refresh().then(setUser).catch(logout);
  }, []);

  const login = setUser;
  const logout = () => {
    setUser();
    localStorage.removeItem("jwt");
  }

  const auth = {
    user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;