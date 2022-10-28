import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import WishList from "./components/WishList";
import SceneryForm from "./components/SceneryForm";
import EntertainmentForm from "./components/EntertainmentForm";
import NotFound from "./components/NotFound";
import AuthContext from "./contexts/AuthContext";

const LOCAL_STORAGE_TOKEN_KEY = "travelGenieToken";

function App() {

  const [user, setUser] = useState(null);

  const [restoreLoginAttemptCompleted, setRestoreLoginAttemptCompleted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (token) {
      login(token);
    }
    setRestoreLoginAttemptCompleted(true);
  }, []);

  const login = (token) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);


    const { sub: nickname, app_user_id: userId, authorities: authoritiesString } = jwtDecode(token);
      
    const roles = authoritiesString.split(',');
      
    const user = {
      nickname,
      userId,
      roles,
      token,
      hasRole(role) {
        return this.roles.includes(role);
      }
    };

    console.log(user);

    setUser(user);

    return user;

  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }

  const auth = {
    user: user ? {...user} : null,
    login,
    logout
  }

  if (!restoreLoginAttemptCompleted) {
    return null;
  }

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Navigation />

          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            
            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to="/home" />}
            </Route>

            <Route exact path="/registration">
              {!user ? <Registration /> : <Redirect to="/home" />}
            </Route>
            
            <Route exact path="/Home">
              {user ? <Home /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/WishList">
              {user ? <WishList /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/Scenery">
              {user ? <SceneryForm /> : <Redirect to="/" />}
            </Route>

            <Route exact path="/EntertainmentForm">
              {user ? <EntertainmentForm /> : <Redirect to="/" />}
            </Route>

            <Route path="*">
              {user ? <NotFound /> : <Redirect to="/" />}
            </Route>
          
          </Switch>
        
      </Router>
    </AuthContext.Provider>
  );
}

export default App;