import React, {Component} from 'react';
import QuestionBox from '../QuestionBox';
import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingSpinner from '../assets/LoadingSpinner';
import TestMenu from './TestMenu';
import TestStartPage from './TestStartPage';

class TestQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isAbleToFetchData: "unknown",
            content: '',
            questions: [],
            answers: []
        }

        const testNum = String(this.props.testNum);
        const testSection = String(this.props.testSection);
        const testPart = String(this.props.testPart);

        if (this.props.db !== undefined) {
            //var data = this.props.db.collection("SAT").doc("Test 1").collection("Reading Test").doc("Part 1");
            var data = this.props.db.collection(this.props.testType)
                                    .doc("Test " + testNum)
                                    .collection(testSection)
                                    .doc("Part " + testPart);
            var fetchedData = data.get()
                .then(doc => {
                    this.getData(doc.data());
                });
        }
    }

    getData(entry){
        console.log(entry);

        if (entry !== undefined) {
            this.setState({
                isLoading: false,
                isAbleToFetchData: "true",
                content: entry.content,
                questions: entry.questions,
                answers: entry.answers
            });
        }
        else {
            this.setState({
                isLoading: false,
                isAbleToFetchData: "false"
            });
        }
    }
    componentWillMount() {
        //Do this to all components you would like to disable the ripple effect, of `material-ui`
        ListItem.defaultProps.disableTouchRipple = true;
        ListItem.defaultProps.disableFocusRipple = true;
        this.setState({
            isLoading: true,
            isAbleToFetchData: "unknown"
        })
    }

    render(){
        var testNum = this.props.testNum;
        var testType = this.props.testType;
        const isAbleToFetchData = this.state.isAbleToFetchData;

        const loadingSpinner = (this.state.isLoading) ? (
            <LoadingSpinner />
        ) : (
            <div/>
        );

        var testQuestionDisplay = (
            <div>
                {loadingSpinner}
            </div>
        );

        if (isAbleToFetchData ==="true") {
            testQuestionDisplay = (
                <div>
                    {/* The display component */}
                    {this.state.content}
                </div>
            )
        }
        else if (isAbleToFetchData ==="false") {
            testQuestionDisplay = (
                <div>Internal Error: Unable to get data from the server.</div>
            )
        }

        return (
            <div>
                {testQuestionDisplay}
            </div>
        );
    }
}
export default TestQuestions
