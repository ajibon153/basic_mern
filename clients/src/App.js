import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/@main/navbar";
import Exercise from "./component/exercise/list";
import CreateUser from "./component/user/add";
import CreateExercise from "./component/exercise/add";
import EditExercise from "./component/exercise/edit";
// import deleteExercise from "./component/exercise/delete";
// import addUser from "./component/user/add";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={Exercise} />
      <Route path="/create" exact component={CreateExercise} />
      <Route path="/user" exact component={CreateUser} />
      <Route path="/edit/:id" component={EditExercise} />
      {/* <Route path="/delete" exact component={deleteExercise} /> */}
    </Router>
  );
}

export default App;
