import React, {Component} from 'react';
import cx from 'classnames';
import {pick} from 'lodash';

class ButtonLink extends Component {

    constructor(props) {
        super(props);

        this.allowedAttributes = [
            'href',
            'name',
            'rel',
            'rev',
            'shape',
            'style',
            'target',
            'title',
            'type',
            'onClick'
        ];
    }

    render() {
        
        const classNames = cx({
            ['button']: true,
            ['button-outline']: this.props.outline,
            ['button-clear']: this.props.clear,
            [this.props.className]: !!this.props.className
        });

        // const props = pick(this.props, this.allowedAttributes);

        return <a className={classNames}>
            {this.props.children}
        </a>
    }
}

ButtonLink.defaultProps = {
    outline: false,
    clear: false,
    className: null
};

export default ButtonLink;