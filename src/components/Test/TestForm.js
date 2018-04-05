import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingSpinner from '../assets/LoadingSpinner';
import TestMenu from './TestMenu';
import TestStartPage from './TestStartPage';

class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            satTestNames: [],
            actTestNames: [],
            testName: ''
        }

        if (this.props.db !== undefined) {
            //var data = this.props.db.collection("SAT").doc("Test 1").collection("Reading Test").doc("Part 1");
            var data = this.props.db.collection(this.props.testType);
            var fetchedData = data.get()
                .then(snapshot => {
                    this.getData(snapshot);
                });
        }

    }

    getData(values){
        // Display all test names
        let testNames = [];
        values.forEach(doc => {
            testNames.push(doc.id);
        });

        if (this.props.testType === "SAT"){
            this.setState({
                satTestNames: testNames
            });
        } else if (this.props.testType === "ACT"){
            this.setState({
                actTestNames: testNames
            });
        }

        this.setState({
            isLoading: false
        });

    }
    componentWillMount() {
        //Do this to all components you would like to disable the ripple effect, of `material-ui`
        ListItem.defaultProps.disableTouchRipple = true;
        ListItem.defaultProps.disableFocusRipple = true;
        this.setState({
            isLoading: true
        })
    }

    render(){
            //const tests = ["Test 1", "Test 2"];
        var testNum = this.props.testNum;
        var testType = this.props.testType;

        const tests = (testType==="SAT") ? (
            this.state.satTestNames
        ) : (
            this.state.actTestNames
        );

        const loadingSpinner = (this.state.isLoading) ? (
            <LoadingSpinner />
        ) : (
            <div/>
        );

        const testForm = (testNum===undefined) ? (
            <div>
                {/* The title */}
                <div className="container">
                    <h1 className="title">{testType}</h1>
                    <h2 className="subtitle">You have chosen to take <strong>{testType}</strong> test.</h2>
                    <hr/>
                </div>

                {/* Show the loading spinner if the tests have not finished loading */}
                {loadingSpinner}

                <div className="columns">
                    <div className="column is-1"/>
                    <div className="column is-4">
                        <MuiThemeProvider>
                            {
                                tests.map((testName, index) => (
                                    <article className="card">
                                      <ListItem
                                        href= {"/test/" + testType.toLowerCase() + "/" + (index+1)}
                                        primaryText={testName}
                                        leftIcon={<ActionDescription />}
                                      />
                                    </article>
                                ))
                            }
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <TestStartPage testNum={testNum} testType={testType} />
            </div>
        );

        return (
            <div>

                {/* The display component */}
                {testForm}
            </div>
        );
    }
}
export default TestForm
