import React, {Component} from 'react';
import QuestionBox from '../QuestionBox';
import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingSpinner from '../assets/LoadingSpinner';
import TestMenu from './TestMenu';
import TestStartPage from './TestStartPage';

const boxContainerContentStyle = {
    height: "600px",
    width: "550px",
    maxHeight: "600px",
    overflowY: "scroll"
}

const boxContainerQuestionStyle = {
    height: "600px",
    width:"400px",
    marginLeft: "50px",
    maxHeight: "600px",
    overflowY: "scroll",
    padding: 1
}

const paragraphStyle = {
    whiteSpace: "pre-line"
}

const radioGroupStyle = {
    position: "relative",
    display: "block",
    height: "24px",
    margin: 0
}

const radioInputStyle = {
    marginRight: 10
}

class TestQuestions extends Component {
    constructor(props) {
        super(props);
        this.onPartChange = this.onPartChange.bind(this);
        this.state = {
            isLoading: true,
            isAbleToFetchData: "unknown",
            content: '',
            questions: [],  // Array of Strings
            answers: [],    // Array of Objects
            chosenAnswers: [],
            partsOfChosenSection: [],
            chosenSection: '',
            chosenPart: ''
        }

        const testNum = String(this.props.testNum);
        const chosenSection = String(this.props.chosenSection);
        const chosenPart = String(this.props.chosenPart);

        if (this.props.db !== undefined) {
            var mainData = this.props.db
                                    .collection(this.props.testType)
                                    .doc("Test " + testNum)
                                    .collection(chosenSection);

            // Get the Parts of the chosen section
            var getMenu = mainData.get()
                .then(snapshot => {
                    this.updateMenu(snapshot, chosenSection, chosenPart);
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });

            // Get the content of the chosen part
            var getContent = mainData.doc(chosenPart).get()
                .then(doc => {
                    this.getData(doc.data());
                });

        }
    }

    updateMenu(snapshot, chosenSection, chosenPart) {
        var partsOfChosenSection = [];
        snapshot.forEach(doc => {
                partsOfChosenSection.push(doc.id);
        });

        this.setState({
            isLoading: false,
            isAbleToFetchData: "true",
            partsOfChosenSection: partsOfChosenSection,
            chosenSection: chosenSection,
            chosenPart: chosenPart
        })
    }

    getData(doc){
        if (doc !== undefined) {
            let newChosenAnswers = [];
            for (let i=0; i<doc.questions.length; i++) {
                newChosenAnswers.push('');
            }

            this.setState({
                isLoading: false,
                isAbleToFetchData: "true",
                content: doc.content,
                questions: doc.questions,
                answers: doc.answers,
                chosenAnswers: newChosenAnswers
            });
        }
        else {
            this.setState({
                isLoading: false,
                isAbleToFetchData: "false"
            });
        }
    }

    onPartChange(chosenPart) {
        let testNum = String(this.props.testNum);
        let chosenSection = String(this.props.chosenSection);

        this.setState({
            chosenPart: chosenPart,
            isLoading: true,
            isAbleToFetchData: "unknown"
        });

        var getContent= this.props.db.collection(this.props.testType)
                    .doc("Test " + testNum)
                    .collection(chosenSection)
                    .doc(chosenPart).get()
                        .then(doc => {
                            this.getData(doc.data());
                        });
    }

    onAnswerChange = (questionIndex, key) => {
        let newChosenAnswers = this.state.chosenAnswers;
        newChosenAnswers[questionIndex] = key;
        this.setState({
            chosenAnswers: newChosenAnswers
        });
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

        const answers = this.state.answers;
        console.log(this.state.chosenAnswers);

        var testQuestionDisplay = (
            <div>
                {loadingSpinner}
            </div>
        );

        if (isAbleToFetchData ==="true") {
            testQuestionDisplay = (
                <div>
                    {/* The display component */}
                    <div className="columns">
                        <div className="column is-3" style={{width: "280px"}}>
                            <TestMenu
                                partsOfChosenSection={this.state.partsOfChosenSection}
                                chosenSection={this.state.chosenSection}
                                chosenPart={this.state.chosenPart}
                                onPartChange={this.onPartChange}
                            />
                        </div>

                        <div className="columns is-gapless">
                            <div className="column is-6">
                                <div className="box" style={boxContainerContentStyle}>
                                    <div className="content">
                                        <h3>This the the title of the content</h3>
                                        <p style={paragraphStyle}>{this.state.content}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="box" style={boxContainerQuestionStyle}>
                                    {
                                        this.state.questions.map((question, questionIndex) => (
                                            <div className="card" style={{width: "100%"}}>
                                                <div className="card-header">
                                                    <p>{question}</p>
                                                </div>
                                                <div className="card-content">
                                                    <form>
                                                    {
                                                        Object.keys(answers[questionIndex]).map(key => (
                                                            <label key={key+answers[questionIndex][key]}
                                                                className="radio"
                                                                style={radioGroupStyle} >
                                                                    <input type="radio"
                                                                        name="answerQuestionBox"
                                                                        style={radioInputStyle}
                                                                        onChange={(e) => this.onAnswerChange(questionIndex, key)}
                                                                        value={key}
                                                                    />
                                                                {answers[questionIndex][key]}
                                                            </label>
                                                        ))
                                                    }
                                                    </form>
                                                </div>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                <hr/>
                <br/>
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
