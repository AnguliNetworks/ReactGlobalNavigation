import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import NavBurger from './NavBurger';
import classnames from 'classnames';

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

        let style = {...this.props.style};

        if (this.props.backgroundColor) {
            style.backgroundColor = this.props.backgroundColor;
        }

        return (
            <nav className={classnames('globalnav', {open: this.state.open})} style={style}>
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
    style: PropTypes.object,
    children: PropTypes.node.isRequired
};

GlobalNav.defaultProps = {
    backgroundColor: 'transparent',
    style: {}
};

export default GlobalNav;
