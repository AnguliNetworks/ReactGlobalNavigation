import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import NavBurger from './NavBurger';

class GlobalNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let customStyle = this.props.customStyle;

        if (this.props.backgroundColor) {
            customStyle.backgroundColor = this.props.backgroundColor;
        }

        return (
            <nav className={'globalnav'} style={customStyle}>
                <NavBurger />
            </nav>
        );
    }
}

GlobalNav.propTypes = {
    backgroundColor: PropTypes.string,
    customStyle: PropTypes.object
};

GlobalNav.defaultProps = {
    backgroundColor: undefined,
    customStyle: {}
};

export default GlobalNav;
