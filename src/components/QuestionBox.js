import React, {Component} from 'react';

class QuestionBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            chosenAnswer: ''
        }
    }

    onChange(e) {
        this.setState({
            chosenAnswer: e.currentTarget.value
        });
    }

    render(){
        const radioGroupStyle = {
            position: "relative",
            display: "block",
            height: "24px",
            margin: 0
        }

        const radioInputStyle = {
            marginRight: 10
        }

        return (
            <article className="message is-dark" style={{width: 400}}>
                <div className="message-header">
                    <p>{this.props.question}</p>
                    {/* <button className="delete" aria-label="delete"></button> */}
                </div>
                <form>
                    <div className='column is-4'>
                    {
                        this.props.multiAnswers.map((answer) => (
                            <label key={answer} className="radio" style={radioGroupStyle} >
                                <input type="radio"
                                    name="answerQuestionBox"
                                    style={radioInputStyle}
                                    onChange={this.onChange}
                                    value={answer} />
                                    {answer}
                                    </label>
                        ))
                    }
                    </div>
                </form>
            </article>
        );
    }
}
export default QuestionBox
