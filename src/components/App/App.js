import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Material-Ui</h1>
                </header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cards">Cards</Link></li>
                        <li><Link to="/new-card">New Card</Link></li>
                    </ul>
                </nav>

                <Router>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/cards" component={CardsPage} />
                    <Route exact path="/new-card" component={NewCardPage} />
                </Router>
            </div>
        );
    }
}

export default App;
