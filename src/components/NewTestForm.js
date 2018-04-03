import React, {Component} from 'react';
import SubHeader from './SubHeader';
import QuestionBox from './QuestionBox';
import NewQuestionBox from './NewQuestionBox';

class NewTestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testName: '',
            readings: [],
            questions: []
        };
    }
    render(){
        return (
            <div>
                <SubHeader chosenTab={this.props.chosenTab} />
                <br/>

                <div className="column is-5">
                    <label className="label">Test name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input"/>
                    </div>
                </div>
                <NewQuestionBox />
                {/*
                <QuestionBox question="Can a car run down the hill at velocity 2ms and stop before hitting the tree ?" multiAnswers={['Yes', 'No', 'May Be']} />
                */}

            </div>
        );
    }
}
export default NewTestForm
