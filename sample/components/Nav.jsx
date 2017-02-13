import React, {Component} from 'react';

class Nav extends Component {


    handleClick = (e) => {
        e.preventDefault();
        window.location.href = e.target.getAttribute('href');
    }

    render() {
        return <nav className="navigation">
            <section className="container">
                <a className="navigation-title" href="/">
                    <h1 className="title">React Milligram</h1>
                </a>
                <ul className="navigation-list float-right">
                    <li className="navigation-item">
                        <a className="navigation-link" href="/">Getting Started</a>
                    </li>
                    <li className="navigation-item">
                        <a className="navigation-link" href="#popover-grid" data-popover>Components</a>
                        <div className="popover" id="popover-grid">
                            <ul className="popover-list">
                                {/*
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#lists" title="Lists">Lists</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#forms" title="Forms">Forms</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#tables" title="Tables">Tables</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#grids" title="Grids">Grids</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#codes" title="Codes">Codes</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#utilities" title="Utilities">Utilities</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#tips" title="Tips">Tips</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#browser-support" title="Browser Support">Browser Support</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#examples" title="Examples">Examples</a></li>
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#contributing" title="Contributing">Contributing</a></li>    
                                */}
                                <li className="popover-item"><a onClick={this.handleClick} className="popover-link" href="#buttons" title="Buttons">Buttons</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </nav>
    }
}

export default Nav;