import React from 'react';
import Screen from './Screen'
import Lang from './context';
import translations from './translations';

//큰 콤포넌트, 1. 모든 스크린을 LangContext 아래
function App() {
  return (
    //provider로 부터 데이터를 가져올수 있다.
    <Lang defaultLang="en" translations={translations}>
      <Screen/>
    </Lang>
  );
}

export default App;
