import React, {Component} from 'react';
import SubHeader from './SubHeader';
import QuestionBox from './QuestionBox';
import NewQuestionBox from './NewQuestionBox';
import NewTestForm from './NewTestForm';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDescription from 'material-ui/svg-icons/action/description';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Link } from "react-router-dom";

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testName: ''
        };
    }
    componentWillMount(){
        //Do this to all components you would like to disable the ripple effect.
        ListItem.defaultProps.disableTouchRipple = true;
        ListItem.defaultProps.disableFocusRipple = true;
    }

    render(){
        const tests = ["Test 1", "Test 2"];
        var testNum = this.props.testNum;
        var testType = this.props.testType;

        const testForm = (testNum===undefined) ? (
            <div className="columns">
            <div className="column is-1"/>
            <div className="column is-4">
            <MuiThemeProvider>
                {
                    tests.map((testName, index) => (
                        <article className="card">
                          <ListItem
                            href= {"/test/" + testType.toLowerCase() + "/" + (index+1)}
                            primaryText={testName}
                            leftIcon={<ActionDescription />}
                          />
                        </article>
                    ))
                }
            </MuiThemeProvider>
            </div>
            </div>
        ) : (
            <div> Welcome to the test {testNum}</div>
        );

        return (
            <div>
                {/* The title */}
                <div className="container">
                    <h1 className="title">{testType}</h1>
                    <h2 className="subtitle">You have chosen to take <strong>{testType}</strong> test.</h2>
                    <hr/>
                </div>
                {testForm}
            </div>
        );
    }
}
export default TestForm
