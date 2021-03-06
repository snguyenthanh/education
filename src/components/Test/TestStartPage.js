import React, {Component} from 'react';
import {sectionsSAT} from '../constants.js';
import {Link} from 'react-router-dom';

const titleStyle = {
    color: "green",
    fontWeight: "bold"
}
const boxStyle = {
    width: "60%"
}

class TestStartPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const testNum = this.props.testNum;
        const testType = this.props.testType;

        return (
            <div align="center">
                {/* Title */}
                <p className="subtitle is-4">{testType}</p>
                <p className="title is-2"><span style={titleStyle}>Test {testNum}</span></p>
                <p className="subtitle is-5">
                    4 sections &#8226; 120 minutes
                </p>
                <br/>

                {/* Content */}
                <div className="box" align="left" style={boxStyle}>
                    <div className="content">
                        <h1 align="center">Welcome to the test {testNum}</h1>
                        <p>
                            dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                        </p>
                        <hr/>

                        <h3>This test has 4 sections:</h3>
                        <ol>
                            {
                                sectionsSAT.map((value) => (
                                    <li>{value}</li>
                                ))
                            }
                        </ol>

                        <div align="center">
                            <Link to={"/test/" + testType.toLowerCase() + "/"+ testNum + "/" + "questions"}>
                                <div className="button is-info is-medium">
                                    Start the test
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TestStartPage
