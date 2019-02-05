import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {tagPropType} from '../../utils';

class GlobalNavBrand extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {

        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.href === '#') {
            event.preventDefault();
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }

    }

    render() {
        let {
            tag: Tag,
            className,
            image,
            style,
            ...attributes
        } = this.props;

        if (image) {
            style = {
                ...style,
                backgroundImage: `url(${image})`
            };
        }

        return (
            <Tag
                {...attributes}
                onClick={this.onClick}
                className={classnames('nav-brand', className, {image})}
                style={style}
            />
        );
    }
}

GlobalNavBrand.propTypes = {
    tag: tagPropType,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.any,
    image: PropTypes.string,
    style: PropTypes.object
};

GlobalNavBrand.defaultProps = {
    tag: 'a',
    style: {}
};

export default GlobalNavBrand;
