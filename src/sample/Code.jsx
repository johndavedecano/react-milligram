import React, {Component} from 'react';

class Code extends Component {
    render() {
        return <pre className="code prettyprint">
            <code className="code-content">
                {this.props.children}
            </code>
        </pre>
    }
}

export default Code;