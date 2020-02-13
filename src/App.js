import React from "react";
import "./App.css";
import {
  BrowserRouter as Router
} from "react-router-dom";
import SteamCurrentlyPlayed from './steamCurrentlyPlayed';
import SteamMostRecentGame from './steamMostRecentGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <div>
        Error has occurred. {this.props.error}
      </div>
    }
    return (
      <Router>
        <SteamCurrentlyPlayed steamDetails={this.props.steamDetails} />
        <SteamMostRecentGame steamDetails={this.props.steamDetails} />
      </Router>
    );
  }
}

export default App;
