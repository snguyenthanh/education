import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TestPageFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testName: ''
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

        return (
            <div>
                <br/>
                <div className="columns">
                    <div className="column is-3"/>
                    <div className="column is-4">
                        <Link to="/test/sat">
                            <div className="button is-primary" style={buttonBigStyle}>
                                <span style={textButtonBigStyle}>SAT</span>
                            </div>
                        </Link>
                    </div>
                    <div className="column is-4">
                        <Link to="/test/act">
                            <div className="button is-info" style={buttonBigStyle}>
                                <span style={textButtonBigStyle}>ACT</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default TestPageFirst
