import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import NavBurger from './NavBurger';

class GlobalNav extends React.Component {

    state = {
        open: false
    };

    constructor(props) {
        super(props);

        this.handleMenuOpen = this.handleMenuOpen.bind(this);
    }

    handleMenuOpen() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        let customStyle = {...this.props.customStyle};

        if (this.props.backgroundColor) {
            customStyle.backgroundColor = this.props.backgroundColor;
        }

        return (
            <nav className={'globalnav'} style={customStyle}>
                <NavBurger open={this.state.open} onClick={this.handleMenuOpen} />
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
