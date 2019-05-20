import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import './App.css';

// MATERIAL-UI THEME
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: cyan,
      error: red,
      contrastThreshold: 3,
      tonalOffset: 0.2,
    }
  });

class App extends Component {
    state = {
        heading: `Material-Ui`,
        name: 'Master',
    }
    changHeading = (event) => {
        this.setState({
            heading: `I'm a different HEADING!!!`,
        })
    }

    handleChange = (event) => {
        console.log('NAME')
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <header>
                    <h1>{this.state.heading}</h1>
                </header>

                <Input type="text" disabled={false} placeholder="Type Here" />
                <br />
                <TextField
                    id="standard-name"
                    label="Name"
                    onChange={this.handleChange}
                    margin="normal"
                />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.changHeading}
                >
                    CHANGE HEADING
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.changHeading}
                >
                    SECONDARY
                </Button>
            </MuiThemeProvider>
        );
    }
}

export default App;
