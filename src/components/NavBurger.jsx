import React from 'react';
import PropTypes from 'prop-types';

function NavBurger({color, onClick}) {
    const crustStyle = {
        backgroundColor: color
    };

    return (
        <div className={'navburger'} aria-hidden={true} onClick={onClick}>
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
    onClick: PropTypes.func
};

NavBurger.defaultProps = {
    color: '#fff',
    onClick: undefined
};

export default NavBurger;
