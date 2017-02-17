import React, {Component} from 'react';
import cx from 'classnames';
import {pick} from 'lodash';

class Button extends Component {

    constructor(props) {
        super(props);
        this.allowedAttributes = [
            'name',
            'style',
            'type',
            'onClick',
        ];
    }

    render() {
        const classNames = cx({
            ['button']: true,
            ['button-outline']: this.props.outline,
            ['button-clear']: this.props.clear,
            [this.props.className]: !!this.props.className
        });

        const props = pick(this.props, this.allowedAttributes);

        return <button className={classNames}
            {...props}>
            {this.props.children}
        </button>
    }
}

Button.defaultProps = {
    outline: false,
    clear: false,
    className: null
};

export default Button;
