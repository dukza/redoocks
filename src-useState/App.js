import React, { useState } from 'react';
import Screen from './Screen'


//큰 콤포넌트
function App() {
  const [user] = useState({
    name:'Nicolas'
  })
  return (
    <Screen user={user}/>
  );
}

export default App;
