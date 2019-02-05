import React from 'react';
import PropTypes from 'prop-types';

function GlobalNavMenu({children}) {
    return (
        <ul className={'menu'}>
            {children}
        </ul>
    );
}

GlobalNavMenu.propTypes = {
    children: PropTypes.node
};

GlobalNavMenu.defaultProps = {
    children: undefined
};


export default GlobalNavMenu;
