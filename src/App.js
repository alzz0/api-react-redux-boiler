import React, { Component, PureComponent } from "react";
import Posts from "./components/Posts"
import PostForm from "./components/PostForm"
import "./App.css";

class App extends Component {
 
  render() {
    return (
      <>
        <PostForm/>
       <Posts/>
      </>
    );
  }
}
export default App;
