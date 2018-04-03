import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Header from './components/Header';
import NewTestPage from './components/NewTestPage';
import Overview from './components/Overview';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <div>
                <Header />
                <br/>
                <br/>
                <Switch>
                    <Route exact path="/" render={props => <Overview chosenTab="Overview" {...props} />} />
                    <Route path="/overview" render={props => <Overview chosenTab="Overview" {...props} />} />
                    <Route path="/new_test_page" render={props => <NewTestPage chosenTab="New Test" {...props} />} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;
