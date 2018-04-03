import React, {Component} from 'react';
import SubHeader from './SubHeader';

class Overview extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <SubHeader chosenTab={this.props.chosenTab} />
                <div>Overview</div>
            </div>
        );
    }
}
export default Overview
