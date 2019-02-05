import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import NavBurger from './NavBurger';

class GlobalNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

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
                <div className={'content'}>
                    <NavBurger open={this.state.open} onClick={this.handleMenuOpen} />
                    {this.props.children}
                </div>
            </nav>
        );
    }
}

GlobalNav.propTypes = {
    backgroundColor: PropTypes.string,
    customStyle: PropTypes.object,
    children: PropTypes.node.isRequired
};

GlobalNav.defaultProps = {
    backgroundColor: undefined,
    customStyle: {}
};

export default GlobalNav;
