import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

//Conponents
import Feed from "./Components/Feed";
import AddItem from "./Components/AddItem";
import NormalCanvas from './Components/NormalCanvas';

// styled header
const WelcomeText = styled.h1`
  color: rgb(161, 200, 84);
`;
const NavBar = styled.div`
  width: 100%;
  text-align: center;

  font-size: 1.5rem;
  background: white;
  border-bottom: 5px solid rgb(245, 225, 52);

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li a {
    text-decoration: none;
    color: rgb(161, 200, 84);
    transition: 1s;
    :hover {
      color: yellow;
    }
    display: inline-flex;
  }
`;

class App extends Component {
  state = {
    feedData: [
      {
        title: "First Post",
        description: "I am the the description of the first post"
      },
      {
        title: "Second Post",
        description: "I am the the description of the Second post"
      },
      {
        title: "Third Post",
        description: "I am the the description of the Third post"
      }
    ]
  };

  handleNewFeedItem = (feedItem) => {
    let newFeed = this.state.feedData;
    newFeed.unshift(feedItem);
    this.setState({
      feedData: newFeed
    });
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NavBar>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/feed">Feed</NavLink>
            </li>
            <li>
              <NavLink to="/add-item">Add</NavLink>
            </li>
          </ul>
        </NavBar>
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <WelcomeText>Welcome to our app</WelcomeText>
              <NormalCanvas text="Hello World" />
            </div>
          )}
        />
        <Route
          exact
          path="/feed"
          component={() => <Feed feedData={this.state.feedData} />}
        />
        <Route
          exact
          path="/add-item"
          component={() => (
            <AddItem handleNewFeedItem={this.handleNewFeedItem} />
          )}
        />
      </div>
    );
  }
}

export default App;