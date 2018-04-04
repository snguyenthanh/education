import React, {Component} from 'react';
import QuestionBox from './QuestionBox';
import NewQuestionBox from './NewQuestionBox';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class NewTestForm extends Component {
    constructor(props) {
        super(props);
        this.onTestNameChange = this.onTestNameChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.state = {
            testName: '',
            selectedSection: '',
            content: '',
            questions: [{
                question: '',
                answers: [{value: ''}]
            }]
        };
    }

    onTestNameChange(e) {
        this.setState({
            testName: e.target.value
        });
    }

    onContentChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    onTabSelected = (selectedOption) => {
        this.setState({
            selectedSection: selectedOption.value
        });
        //console.log(`Selected: ${selectedOption.label}`);
    }

    render(){
        //const sections = ['Reading test', 'Writing and Language test', 'Math test - No Calculator', 'Math test - Calculator'];
        const sections = [
            {value: 'Reading test', label: 'Reading test'},
            {value: 'Writing and Language test', label: 'Writing and Language test'},
            {value: 'Math test - No Calculator', label: 'Math test - No Calculator'},
            {value: 'Math test - Calculator', label: 'Math test - Calculator'}
        ];

        const value = this.state.selectedSection;

        return (
            <div>
                <div className="column is-4">
                    <label className="label">Test name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" onChange={this.onTestNameChange}/>
                    </div>
                </div>

                <div className="column is-4">
                    <label className="label">Section</label>
                    <Select
                        name="form-field-name"
                        value={value}
                        clearable={false}
                        onChange={this.onTabSelected}
                        options={sections}
                    />
                </div>

                <label className="label">Content</label>
                <div className="columns">
                    <div className="column is-6">
                        <textarea className="textarea" placeholder="Contents to read" rows="15" onChange={this.onContentChange}></textarea>
                    </div>

                    <div className="column is-5">
                        {
                            this.state.questions.map((entry, entryIndex) => (
                                <div className="card">
                                    <div className="card-content">


                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* <NewQuestionBox /> */}
                {/*
                <QuestionBox question="Can a car run down the hill at velocity 2ms and stop before hitting the tree ?" multiAnswers={['Yes', 'No', 'May Be']} />
                */}

            </div>
        );
    }
}
export default NewTestForm
