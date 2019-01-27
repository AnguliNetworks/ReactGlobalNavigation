import React from 'react';
import PropTypes from 'prop-types';

function NavBurger({color, onClick, open}) {
    const crustStyle = {
        backgroundColor: color
    };

    let className = 'navburger';

    if (open) {
        className += ' open';
    }

    return (
        <div className={className} aria-hidden={true} onClick={onClick}>
            <span className={'bread bread-top'}>
                <span className={'crust crust-top'} style={crustStyle} />
            </span>
            <span className={'bread bread-bottom'}>
                <span className={'crust crust-bottom'} style={crustStyle} />
            </span>
        </div>
    );
}

NavBurger.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    open: PropTypes.bool
};

NavBurger.defaultProps = {
    color: '#fff',
    onClick: undefined,
    open: false
};

export default NavBurger;
