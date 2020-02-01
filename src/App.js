import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Blog from './exampleBlog/Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './exampleBlog/Markdown';

console.log(process.env.REACT_APP_API_KEY);

function App(props) {
  return (
    <Router>
      <div>
      </div>
    </Router>
  );
}

export default App;
