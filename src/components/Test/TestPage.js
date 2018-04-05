import React, {Component} from 'react';
import SubHeader from '../SubHeader';
import QuestionBox from '../QuestionBox';
import NewQuestionBox from '../New/NewQuestionBox';
import NewTestForm from '../New/NewTestForm';
import TestPageFirst from './TestPageFirst';
import TestForm from './TestForm';
import TestQuestions from './TestQuestions';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testType: ''
        };
    }

    changeChosenTab = (value) => {
        if (typeof this.props.chosenTab === 'function') {
            this.props.chosenTab(value);
        }
    }

    componentWillMount() {
        this.changeChosenTab("Take the test");
    }

    render(){
        const buttonBigStyle = {
            display: "inline-block",
            width: "200px",
            height: "200px"
        }
        const textButtonBigStyle = {
            textAlign: "center",
            lineHeight: "180px"
        }

        const testType = this.props.testType;

        var testToDisplay = (
            <TestPageFirst />
        )

        if (this.props.proceedToQuestions === true) {
            testToDisplay = (
                <TestQuestions
                    testType={testType}
                    testNum={this.props.match.params.testNum}
                    testSection={"Reading Test"}
                    testPart={1}
                    db={this.props.db}
                />
            )
        }
        else if (testType!==undefined) {
            testToDisplay = (
                <TestForm
                    testType={testType}
                    testNum={this.props.match.params.testNum}
                    db={this.props.db}
                />
            )
        }

        return (
            <div>
                <br/>
                {testToDisplay}

                {/* <NewQuestionBox /> */}
                {/*
                <SubHeader chosenTab={this.props.chosenTab} />
                <NewTestForm />
                <QuestionBox question="Can a car run down the hill at velocity 2ms and stop before hitting the tree ?" multiAnswers={['Yes', 'No', 'May Be']} />
                */}

            </div>
        );
    }
}
export default TestPage
