import React, {Component} from 'react';
import SubHeader from './SubHeader';

class AnswerChoice extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            value: ''
        }
    }

    onChange(e) {
        //this.props.onAnswerChange(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render(){
        const answerStyle = {
            display: "inline-block",
            width: "60%",
            marginRight: 20,
            marginBottom: 10
        }
        return (
            <input
                className="input"
                type="text"
                placeholder="Answer"
                value={this.state.value}
                style={answerStyle}
                onChange={this.onChange}
            />

        );
    }
}
export default AnswerChoice
