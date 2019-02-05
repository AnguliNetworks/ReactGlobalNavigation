import React from 'react';
import ReactDOM from 'react-dom';
import GlobalNav from './components/GlobalNav';
import GlobalNavBrand from './components/content/GlobalNavBrand';

ReactDOM.render(<React.Fragment>
    <span>This is extra text.</span>
    <GlobalNav backgroundColor={'rgb(0, 122, 255)'}>
        <GlobalNavBrand image={'https://i.imgur.com/Jg8F6qz.png'} href={'/'}>Brand</GlobalNavBrand>
    </GlobalNav>
</React.Fragment>, document.getElementById('root'));
