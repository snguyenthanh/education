import React, {Component} from 'react';
import SubHeader from './SubHeader';
import QuestionBox from './QuestionBox';
import NewQuestionBox from './NewQuestionBox';
import NewTestForm from './NewTestForm';
import TestPageFirst from './TestPageFirst';
import TestForm from './TestForm';

class TestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testType: ''
        };
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
        const testToDisplay = (testType===undefined) ? (
            <TestPageFirst />
        ) : (
            <div>
                <TestForm testType={testType} testNum={this.props.match.params.testNum} />
            </div>
        );

        return (
            <div>
                <SubHeader chosenTab={this.props.chosenTab} />
                <br/>
                {testToDisplay}

                {/* <NewQuestionBox /> */}
                {/*
                <NewTestForm />
                <QuestionBox question="Can a car run down the hill at velocity 2ms and stop before hitting the tree ?" multiAnswers={['Yes', 'No', 'May Be']} />
                */}

            </div>
        );
    }
}
export default TestPage
