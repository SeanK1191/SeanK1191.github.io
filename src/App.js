import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SteamCurrentlyPlayed from "./steamCurrentlyPlayed";
import SteamMostRecentGame from "./steamMostRecentGame";
import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      hasError: false,
      checked: false,
      paletteType: 'light'
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error);
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  changeTheme = () => {
    this.setState({
      checked: !this.state.checked,
      paletteType: !this.state.checked === true ? 'dark' : 'light'
    })
  }

  render() {
    if (this.state.hasError) {
      return <div>Error has occurred. {this.props.error}</div>;
    }

    const theme = createMuiTheme({
      palette: {
        type: this.state.paletteType
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Paper>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checked}
                onChange={this.changeTheme}
                value="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          </Paper>
        
          <SteamCurrentlyPlayed steamDetails={this.props.steamDetails} />
          <SteamMostRecentGame steamDetails={this.props.steamDetails} />
        </Router>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
