import React from 'react';
import {useUser} from './context';


// user의 이름을 변경하는것이 목표
const Header = () => {
    // coctext를 useContext에 주면 privider를 찾는다
    // const {user:{name, loggedIn}} = useContext(UserContext);
    const {name, loggedIn} = useUser();
    // console.log(context);
    return(
        <header>
            <a href="#">Home</a> Hello,{name}! you are {loggedIn ? 'logUserIn':'anonymous'}
        </header>
    );
}

export default Header;