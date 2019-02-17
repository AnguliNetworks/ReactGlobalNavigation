import React from 'react';
import PropTypes from 'prop-types';

function GlobalNavAddition({children}) {

    return (
        <div className={'addition'}>
            {children}
        </div>
    );
}

GlobalNavAddition.propTypes = {
    children: PropTypes.node.isRequired
};

export default GlobalNavAddition;
