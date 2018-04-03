import React, {Component} from 'react';
import SubHeader from './SubHeader';
import QuestionBox from './QuestionBox';
import NewQuestionBox from './NewQuestionBox';
import NewTestForm from './NewTestForm';

class NewTestPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testName: ''
        };
    }
    render(){
        return (
            <div>
                <SubHeader chosenTab={this.props.chosenTab} />

                <NewTestForm />
                {/* <NewQuestionBox /> */}
                {/*
                <QuestionBox question="Can a car run down the hill at velocity 2ms and stop before hitting the tree ?" multiAnswers={['Yes', 'No', 'May Be']} />
                */}

            </div>
        );
    }
}
export default NewTestPage
