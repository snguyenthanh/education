import React, {Component} from 'react';
import SubHeader from './SubHeader';

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    changeChosenTab = (value) => {
        if (typeof this.props.chosenTab === 'function') {
            this.props.chosenTab(value);
        }
    }

    componentWillMount() {
        this.changeChosenTab("Overview");
    }

    render(){
        return (
            <div>
                {/* <SubHeader chosenTab={this.changeChosenTab("Overview")} /> */}
                <div>Overview</div>
            </div>
        );
    }
}
export default Overview
