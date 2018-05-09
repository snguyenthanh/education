import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from 'firebase';
import 'firebase/firestore';
import asyncComponent from './AsyncComponent'

import Header from './components/Header';
import SubHeader from './components/SubHeader';

const Overview = asyncComponent(() =>
    import('./components/Overview').then(module => module.default)
)

const NewTestPage = asyncComponent(() =>
    import('./components/New/NewTestPage').then(module => module.default)
)

const TestPage = asyncComponent(() =>
    import('./components/Test/TestPage').then(module => module.default)
)

const PageNotFound = asyncComponent(() =>
    import('./components/PageNotFound').then(module => module.default)
)

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenTab : "Overview"
        }

        var config = {
            apiKey: "AIzaSyC_4pMCsEaLYpAo88UwtbepDjSCoSBubJs",
            authDomain: "react-with-firebase-e5b56.firebaseapp.com",
            databaseURL: "https://react-with-firebase-e5b56.firebaseio.com",
            projectId: "react-with-firebase-e5b56",
            storageBucket: "react-with-firebase-e5b56.appspot.com",
            messagingSenderId: "1038381700657"
        };
        firebase.initializeApp(config);
    }

    changeTab = (tabName) => {
        this.setState({
            chosenTab: tabName
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <SubHeader chosenTab={this.state.chosenTab}/>
                        <Switch>
                            <Route exact path="/" render={props => <Overview chosenTab={this.changeTab} {...props} />} />
                            <Route path="/overview" render={props => <Overview chosenTab={this.changeTab} {...props} />} />
                            <Route path="/new_test_page" render={props => <NewTestPage chosenTab={this.changeTab} {...props} />} />
                            <Route exact path="/test" render={props => <TestPage chosenTab={this.changeTab} {...props} />} />
                            <Route exact path="/test/sat/" render={props => <TestPage chosenTab={this.changeTab} testType="SAT" db={firebase.firestore()} {...props} />} />
                            <Route exact path="/test/sat/:testNum" render={props => <TestPage chosenTab={this.changeTab} testType="SAT" db={firebase.firestore()} {...props} />} />
                            <Route exact path="/test/act/" render={props => <TestPage chosenTab={this.changeTab} testType="ACT" db={firebase.firestore()} {...props} />} />
                            <Route exact path="/test/act/:testNum" render={props => <TestPage chosenTab={this.changeTab} testType="ACT" db={firebase.firestore()} {...props} />} />

                            <Route exact path="/test/sat/:testNum/questions" render={props => <TestPage chosenTab={this.changeTab} testType="SAT" db={firebase.firestore()} proceedToQuestions={true} {...props} />} />
                            <Route exact path="/test/act/:testNum/questions" render={props => <TestPage chosenTab={this.changeTab} testType="ACT" db={firebase.firestore()} proceedToQuestions={true} {...props} />} />

                            <Route component={PageNotFound} />
                        </Switch>
                </div>
            </Router>
        );
    }
}

// env PATH="/usr/bin:$PATH" npm install
export default App;
