import React, {Component} from 'react';
import {sectionsSAT} from '../constants.js';

class TestMenu extends Component {
    constructor(props) {
        super(props);
        this.handlePartChange = this.handlePartChange.bind(this);
    }

    handlePartChange = (part) => {
        if (typeof this.props.onPartChange === 'function') {
            this.props.onPartChange(part);
        }
    }

    render(){
        // This variables must be Arrays
        const partsOfChosenSection = this.props.partsOfChosenSection.sort((a, b) => a > b);

        // This variable must be String and exist in `partsOfChosenSection`
        const chosenPart = this.props.chosenPart;

        // This variable must exist in `sectionsSAT`
        const chosenSection = this.props.chosenSection;

        return (
            <aside className="menu">
                {
                    sectionsSAT.map((section, sectionIndex) => (
                        <div>
                            <p className="menu-label">{sectionIndex+1 + ". " + section}</p>
                            <ul className="menu-list">
                                {
                                    partsOfChosenSection.map(part => {
                                        return (part===chosenPart && chosenSection===section) ? (
                                            <li><a
                                                    className="is-active"
                                                    value={part}
                                                    onClick={(e) => this.handlePartChange(part)}>
                                                {part}
                                                </a>
                                            </li>
                                        ) : (
                                            chosenSection===section ? (
                                                <li><a onClick={(e) => this.handlePartChange(part)}>{part}</a></li>
                                            ): (<div/>)
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ))
                }
            </aside>


        );
    }
}
export default TestMenu
