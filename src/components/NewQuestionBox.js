import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import AnswerChoice from './AnswerChoice';
import update from 'react-addons-update'; // ES6
import _ from 'lodash';


class NewQuestionBox extends Component {
    constructor(props) {
        super();
        this.state = {
            question: '',
            answers: [{value: ''}]

        }
    }

    handleAnswerChange = (idx) => (e) => {
        const newAnswers = this.state.answers.map((answer, ansIndex) => {
            if (idx !== ansIndex) return answer;
            return { ...answer, value: e.target.value };
        });
        this.setState({ answers: newAnswers });
    }

    onClickAddAnswer = () => {
        this.setState({
            answers: this.state.answers.concat([{ value: '' }])
        });
    }

    onClickRemoveAnswer = (indexToDelete) => () => {
        this.setState({
            answers: this.state.answers.filter((val, ansIndex) => indexToDelete !== ansIndex)
        });
    }

    render(){
        const answerStyle = {
            display: "inline-block",
            width: "60%",
            marginRight: 20,
            marginBottom: 10
        }

        return (
            <div className="card" style={{width: 600}}>
                <div className="card-content">

                    {/* Question input */}
                    <div className="field" style={{width: "80%"}}>
                        <label className="label">Question</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Question"></textarea>
                        </div>
                    </div>

                    {/* List out all the answer choices */}
                    {
                        this.state.answers.map((answer, index) => (
                            <div>
                                {/* <AnswerChoice /> */}
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Answer"
                                    value={answer.value}
                                    style={answerStyle}
                                    onChange={this.handleAnswerChange(index)}
                                />
                                <a className="button is-danger" onClick={this.onClickRemoveAnswer(index)} >
                                    <span>Delete</span>
                                </a>
                            </div>
                        ))
                    }

                    <a className="button is-success" onClick={this.onClickAddAnswer} >
                        <span>Add</span>
                    </a>

                </div>
            </div>
        );
    }
}
export default NewQuestionBox
