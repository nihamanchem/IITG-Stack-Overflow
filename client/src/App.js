import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

//SCREENS
import Register from "./screens/Register";
import Login from "./screens/Login";
import Home from "./screens/Home";
import PostQuestion from "./screens/PostQuestion";
import ViewQuestionScreen from "./screens/ViewQuestion/ViewQuestionScreen";
import NotFound from "./screens/NotFound"
import AllQuestions from "./screens/AllQuestions";
import Users from "./screens/Users";
import UserProfileScreen from "./screens/UserProfile/UserProfileScreen"
import SearchBarScreen from "./screens/SearchBar/SearchBarScreen";
import { loadUser } from "./redux/actions";

const App = () => {
  
  const dispatch = useDispatch();
  useEffect(() => { dispatch(loadUser()); }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/questions" exact component={AllQuestions} />
        <Route path="/question/ask" exact component={PostQuestion} />
        <Route path="/question/:id" exact component={ViewQuestionScreen}/>
        <Route path="/users" exact component={Users} />
        <Route path="/users/:user_id" exact component={UserProfileScreen} />
        <Route path="/search/:search_id" exact component={SearchBarScreen} />
        <Route path="*" component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
