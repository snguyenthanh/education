import React, {Component} from 'react';

class Header extends Component {

  render(){
    return (
<div>
        <nav className="navbar ">
<div className="navbar-brand">
<a className="navbar-item" href="http://bulma.io">
  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
</a>

<a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" >
  <span className="icon">
    <i className="fa fa-github"></i>
  </span>
</a>

<a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" >
  <span className="icon" >
    <i className="fa fa-twitter"></i>
  </span>
</a>

<div className="navbar-burger burger" data-target="navMenubd-example">
  <span></span>
  <span></span>
  <span></span>
</div>
</div>

<div id="navMenubd-example" className="navbar-menu">
<div className="navbar-start">
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link  is-active" href="/documentation/overview/start/">
      Docs
    </a>
    <div className="navbar-dropdown ">
      <a className="navbar-item " href="/documentation/overview/start/">
        Overview
      </a>
      <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
        Modifiers
      </a>
      <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
        Columns
      </a>
      <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
        Layout
      </a>
      <a className="navbar-item " href="http://bulma.io/documentation/form/general/">
        Form
      </a>
      <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
        Elements
      </a>

      <a className="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
          Components
        </a>

    </div>
  </div>
  <div className="navbar-item has-dropdown is-hoverable is-mega">
    <div className="navbar-link">
      Blog
    </div>
    <div id="blogDropdown" className="navbar-dropdown ">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column">
            <h1 className="title is-6 is-mega-menu-title">Sub Menu Title</h1>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
          </div>
          <div className="column">
            <h1 className="title is-6 is-mega-menu-title">Sub Menu Title</h1>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">

                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
            <a className="navbar-item " href="/documentation/overview/start/">
        Overview
      </a>
            <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
        Modifiers
      </a>
            <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
        Columns
      </a>
          </div>
          <div className="column">
            <h1 className="title is-6 is-mega-menu-title">Sub Menu Title</h1>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
            <a className="navbar-item" href="/2017/08/03/list-of-tags/">
              <div className="navbar-content">
                <p>
                  <small className="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>

          </div>
          <div className="column">
            <h1 className="title is-6 is-mega-menu-title">Sub Menu Title</h1>
            <a className="navbar-item " href="/documentation/overview/start/">
        Overview
      </a>
            <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
        Modifiers
      </a>
            <a className="navbar-item " href="http://bulma.io/documentation/columns/basics/">
        Columns
      </a>
            <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
        Layout
      </a>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="navbar-item has-dropdown is-hoverable">
    <div className="navbar-link">
      More
    </div>
    <div id="moreDropdown" className="navbar-dropdown ">
      <a className="navbar-item " href="http://bulma.io/extensions/">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <p>
                <strong>Extensions</strong>
                <br/>
                <small>Side projects to enhance Bulma</small>
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <span className="icon has-text-info">
                <i className="fa fa-plug"></i>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
  <a className="navbar-item " href="http://bulma.io/expo/">
    &nbsp;Expo
  </a>
  <a className="navbar-item " href="http://bulma.io/love/">
    &nbsp;Love
  </a>
</div>

<div className="navbar-end">
  <a className="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" >
    <span className="icon">
      <i className="fa fa-github"></i>
    </span>
  </a>
  <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" >
    <span className="icon">
      <i className="fa fa-twitter"></i>
    </span>
  </a>
  <div className="navbar-item">
    <div className="field is-grouped">
      <p className="control">
        <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io"  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
          <span className="icon">
<i className="fa fa-twitter"></i>
</span>
          <span>
Tweet
</span>
        </a>

      </p>
      <p className="control">
        <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
          <span className="icon">
            <i className="fa fa-download"></i>
          </span>
          <span>Download</span>
        </a>
      </p>
    </div>
  </div>
</div>
</div>
</nav>
</div>
    );
  }
}
export default Header
