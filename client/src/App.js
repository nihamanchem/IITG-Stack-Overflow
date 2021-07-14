import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PostQuestion from "./pages/PostQuestion";
import ViewQuestionScreen from "./pages/ViewQuestion/ViewQuestionScreen";
import NotFound from "./pages/NotFound"
import AllQuestions from "./pages/AllQuestions";
import Users from "./pages/Users";
import UserProfileScreen from "./pages/UserProfile/UserProfileScreen"
import SearchBarScreen from "./pages/SearchBar/SearchBarScreen";
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
