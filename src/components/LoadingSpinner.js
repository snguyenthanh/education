import React, {Component} from 'react';
import '../css/LoadingSpinner.css';

class LoadingSpinner extends Component {
    render(){
        return (
            <div className="circularProgressShowbox">
              <div className="circularProgressLoader">
                <svg className="circularC" viewBox="25 25 50 50">
                  <circle className="circularProgressPath" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
                </svg>
              </div>
            </div>
        );
    }
}

export default LoadingSpinner
