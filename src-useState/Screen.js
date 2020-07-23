import React from 'react';
import Header from './Header';

const Screen = ({user}) => (
    <>
    <Header user={user}></Header>
    <h1>First screen</h1>
    </>
);

export default Screen;