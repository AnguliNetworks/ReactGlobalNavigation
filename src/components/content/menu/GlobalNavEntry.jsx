import React from 'react';
import PropTypes from 'prop-types';
import {tagPropType} from '../../../utils';

function GlobalNavEntry({tag: Tag, children, ...attributes}) {
    return (
        <li className={'entry'}>
            <Tag className={'link'} {...attributes}>{children}</Tag>
        </li>
    );
}

GlobalNavEntry.propTypes = {
    tag: tagPropType,
    href: PropTypes.any,
    children: PropTypes.node
};

GlobalNavEntry.defaultProps = {
    tag: 'a',
    children: ''
};

export default GlobalNavEntry;
