import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SubHeader extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const chosenTab = this.props.chosenTab;
        return (
            <section className="hero is-link is-small">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <p className="subtitle">
                                    Nothing to show here.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container">
                        <nav className="tabs is-boxed">
                            <ul>
                                <li className={chosenTab==="Overview" ? 'is-active' : ''} >
                                    <Link to="/">Overview</Link>
                                </li>
                                <li className={chosenTab==="Create New Test" ? 'is-active' : ''}>
                                    <Link to="/new_test_page">Create New Test</Link>
                                </li>
                                <li className={chosenTab==="Take the test" ? 'is-active' : ''}>
                                    <Link to="/test">Take the test</Link>
                                </li>
                            </ul>
                      </nav>
                  </div>
              </div>
            </section>
        );
    }
}
export default SubHeader
