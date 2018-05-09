import React, {Component} from 'react';

class Header extends Component {

  render(){
    return (
<div>
        <nav className="navbar ">
<div className="navbar-brand">
<a className="navbar-item" href="http://bulma.io">
  {/* <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/> */}
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAACgCAYAAACc/t08AAAABGdBTUEAALGPC/xhBQAAK1xJREFUeAHtnQm8JUV1xu9jYGDYZRMQYVgGF5ZBZDPKKijMMIqKokQRt6ggUYkhIFFGccMFEzCKG4qJqBEVGUAUCBAQAoiCRECjrIoIxADDJjAz+b55r2feu0t3dfc53dXdX/1+5/W93VWnTv37vnu/e6q7bq/XhnLDgvk9mooIiIAIiIAIiIAIiEAHCCwVf+cs6d1AkwjswBnXEEVABERABERABEoSGCvZvt7mSwXfkhOmBjH2od7sefOn7tMzERABERABERABERCBhEBzBeBQ8bdsWBKBCQptRUAEREAEREAERKCPQDMFYKr4S0aoTGBCQlsREAEREAEREAERmEygeQIwSPwlQ5QITEhoKwIiIAIiIAIiIAIJgWYJwFzib9kQNR2coNBWBERABERABERABECgOQKwkPhLzrEygQkJbUVABERABERABESgGQKwlPhLTrJEYEJCWxEQAREQAREQgW4TiF8Amoi/5CRLBCYktBUBERABERABEegugbgFoKn4S06yRGBCQlsREAEREAEREIFuEohXALqIv+QkSwQmJLQVAREQAREQARHoHoE4BaCr+EtOskRgQkJbERABERABERCBbhGITwBWIv6SkywRmJDQVgREQAREQAREoDsE4hKAlYq/5CRLBCYktBUBERABERABEegGgXgEYC3iLznJEoEJCW1FQAREQAREQATaTyAOAVir+EtOskRgQkJbERABERABERCBdhOoXwBGIf6SkywRmJDQVgREQAREQAREoL0E6hWAUYm/5CRLBCYktBUBERABERABEWgngfoEYJTiLznJEoEJCW1FQAREQAREQATaR6AeARi1+EtOskRgQqJB25VrjHUJ+n6ixv6r7noFdLi46k4r7i/2McYeX8WnK7i7FVHzqeDa3as4DUNe1LFhb4DxHgzbAbYxbKOJ7TrY3ge7e5Jdg8dnwx6ANbpULwAbIf6ScyoRmJCIcLsuYnobbFfY5rCZsLVgdZZEBP4FQTwC+9Mkuw2Pb4bdBPsNjHWaUrZHoIfCtoHxzZHGN8zHYXxj/CPsD7ALYd+DPQhrUlkVwR4EmwN7BiwZ42p4nLz5c4y3wL4DuxpWZVkbnb0Kth8siY0fUPzCcy8sOQc3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" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
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
