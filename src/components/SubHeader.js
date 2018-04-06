import React, {Component} from 'react';

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
                                    <a href="/">Overview</a>
                                </li>
                                <li className={chosenTab==="Create New Test" ? 'is-active' : ''}>
                                    <a href="/new_test_page">Create New Test</a>
                                </li>
                                <li className={chosenTab==="Take the test" ? 'is-active' : ''}>
                                    <a href="/test">Take the test</a>
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
