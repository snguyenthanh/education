import React, {Component} from 'react';
import QuestionBox from './QuestionBox';

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.onClickAddQuestion = this.onClickAddQuestion.bind(this);
        this.state = {
            questions: []
        }
    }

    onClickAddQuestion(e) {
        this.state.questions.push(<QuestionBox />);
    }

    render(){
        
    }
}
export default QuestionList
