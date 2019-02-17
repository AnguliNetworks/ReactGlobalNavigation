import React from 'react';
import ReactDOM from 'react-dom';
import GlobalNav from './components/GlobalNav';
import GlobalNavBrand from './components/content/GlobalNavBrand';
import GlobalNavMenu from './components/content/menu/GlobalNavMenu';
import GlobalNavEntry from './components/content/menu/GlobalNavEntry';

ReactDOM.render(<React.Fragment>
    <GlobalNav backgroundColor={'rgb(0, 122, 255)'}>
        <GlobalNavBrand image={'https://i.imgur.com/Jg8F6qz.png'} href={'/'}>Brand</GlobalNavBrand>
        <GlobalNavMenu>
            <GlobalNavEntry href={'#'}>Home</GlobalNavEntry>
            <GlobalNavEntry href={'#'}>About</GlobalNavEntry>
            <GlobalNavEntry href={'#'}>Contact</GlobalNavEntry>
        </GlobalNavMenu>
    </GlobalNav>
    <h1 style={{marginTop: '64px'}}>Further Example Content</h1>
    <p>Lorem Ipsum dolor sit amet.</p>
</React.Fragment>, document.getElementById('root'));
