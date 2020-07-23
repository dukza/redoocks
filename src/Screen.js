import React from 'react';
import Header from './Header';
import {useFns} from './context';

const Screen = () => {
    // const {logUserIn} = useContext(UserContext);
    const {logUserIn} = useFns();
    return(
        <>
        <Header></Header>
        <h1>First screen</h1>
        <button onClick={logUserIn}>log User in</button>
        </>
    )
}

export default Screen;