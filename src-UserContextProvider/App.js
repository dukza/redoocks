import React from 'react';
import Screen from './Screen'
import UserContextProvider from './context';


//큰 콤포넌트, 1. 모든 스크린을 UserContextProvider 아래
function App() {
  return (
    //provider로 부터 데이터를 가져올수 있다.
    <UserContextProvider>
      <Screen/>
    </UserContextProvider>
  );
}

export default App;
