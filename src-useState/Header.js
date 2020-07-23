import React from 'react';


// user의 이름을 변경하는것이 목표
const Header = ({user}) => (
    <header>
        <a href="#">Home</a> Hello, {user.name}!
    </header>
);

export default Header;