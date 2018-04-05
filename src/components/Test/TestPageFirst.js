import React, {Component} from 'react';

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
                        <a className="button is-primary" style={buttonBigStyle} href="/test/sat">
                            <span style={textButtonBigStyle}>SAT</span>
                        </a>
                    </div>
                    <div className="column is-4">
                        <a className="button is-info" style={buttonBigStyle} href="/test/act">
                            <span style={textButtonBigStyle}>ACT</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default TestPageFirst
